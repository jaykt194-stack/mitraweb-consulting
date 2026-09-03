import { NextResponse } from "next/server";
import { sendContactFormEmails } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, budget, description, preferredMethod, honeypot } = body;

    // Basic honeypot check to block automated spam bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Submission received" }, { status: 200 });
    }

    // Required fields validation
    if (!name || !email || !phone || !description) {
      return NextResponse.json(
        { success: false, error: "Please provide your Name, Email, Phone number, and Project Description." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    // Dispatch real-time emails to working inbox and confirmation receipt to client
    const mailResult = await sendContactFormEmails({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      description,
      preferredMethod,
    });

    console.log("[CONTACT_FORM_DISPATCHED]", {
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
        message: "Thank you for reaching out. Your enquiry has been received and a confirmation has been sent to your email. An engineering consultant will review your requirements and respond within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please reach out to support@mitrawebconsulting.net directly." },
      { status: 500 }
    );
  }
}
