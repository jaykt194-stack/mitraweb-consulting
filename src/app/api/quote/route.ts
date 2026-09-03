import { NextResponse } from "next/server";
import { sendQuoteFormEmails } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      website,
      industry,
      projectType,
      description,
      requiredFeatures,
      targetPlatforms,
      budget,
      timeline,
      currentTech,
      referralSource,
      honeypot,
    } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Quote request received" }, { status: 200 });
    }

    if (!name || !email || !phone || !description) {
      return NextResponse.json(
        { success: false, error: "Please complete all required fields (Name, Email, Phone, Description)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    // Dispatch real-time emails to owner inbox and confirmation to client
    const mailResult = await sendQuoteFormEmails({
      name,
      email,
      phone,
      company,
      website,
      industry: industry || "Other",
      projectType: projectType || "Custom Software Development",
      targetPlatforms: Array.isArray(targetPlatforms) ? targetPlatforms : ["Web Application"],
      requiredFeatures: Array.isArray(requiredFeatures) ? requiredFeatures : [],
      budget: budget || "Not specified",
      timeline: timeline || "Flexible",
      currentTech,
      description,
      referralSource,
    });

    console.log("[QUOTE_REQUEST_DISPATCHED]", {
      name,
      email,
      phone,
      company,
      mailResult,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project scope details have been submitted and a confirmation receipt has been sent to your email. An engineering lead will assemble a preliminary scope & architecture outline within 24-48 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[QUOTE_API_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Unable to process quote request at this time." },
      { status: 500 }
    );
  }
}
