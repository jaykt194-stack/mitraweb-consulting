import { NextResponse } from "next/server";

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

    console.log("[QUOTE_REQUEST_SUBMITTED]", {
      name,
      email,
      phone,
      company,
      industry,
      projectType,
      budget,
      timeline,
      featuresCount: Array.isArray(requiredFeatures) ? requiredFeatures.length : 0,
      platforms: targetPlatforms,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project scope details have been submitted. An engineering lead will assemble a preliminary scope & architecture outline within 24-48 business hours.",
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
