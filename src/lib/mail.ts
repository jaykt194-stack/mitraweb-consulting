import { Resend } from "resend";
import { siteConfig } from "@/data/siteConfig";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

const DEFAULT_TO_EMAIL = process.env.NOTIFICATION_EMAIL || "support@mitrawebconsulting.net";
const DEFAULT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Mitraweb Consulting <onboarding@resend.dev>";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  budget: string;
  description: string;
  preferredMethod?: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  website?: string;
  industry: string;
  projectType: string;
  targetPlatforms: string[];
  requiredFeatures: string[];
  budget: string;
  timeline: string;
  currentTech?: string;
  description: string;
  referralSource?: string;
}

/**
 * Dispatches notification email to the owner and confirmation receipt to the client.
 */
export async function sendContactFormEmails(data: ContactFormData) {
  if (!resend) {
    console.warn("[MAIL] RESEND_API_KEY is not set. Logging email content instead:", data);
    return { success: true, mocked: true };
  }

  const results = {
    ownerDelivered: false,
    clientDelivered: false,
    errors: [] as any[],
  };

  // 1. Send Notification Email to Working Owner
  try {
    const ownerHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0b132b; padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Project Enquiry Received</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Mitraweb Consulting &bull; Website Lead</p>
        </div>
        
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${escapeHtml(data.name)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Work Email</td>
              <td style="padding: 10px 0; color: #2563eb;"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.email)}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp</td>
              <td style="padding: 10px 0; color: #0f172a;">${escapeHtml(data.phone)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Company</td>
              <td style="padding: 10px 0; color: #0f172a;">${escapeHtml(data.company || "Not provided")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Project Type</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${escapeHtml(data.projectType)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Estimated Budget</td>
              <td style="padding: 10px 0; color: #16a34a; font-weight: 700;">${escapeHtml(data.budget)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Preferred Method</td>
              <td style="padding: 10px 0; color: #0f172a;">${escapeHtml(data.preferredMethod || "Email")}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Project Requirements & Goals</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${escapeHtml(data.description)}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            You can directly click Reply to this email to respond directly to ${escapeHtml(data.name)} (${escapeHtml(data.email)}).
          </div>
        </div>
      </div>
    `;

    const ownerRes = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: DEFAULT_TO_EMAIL,
      replyTo: data.email,
      subject: `New Lead: [${data.projectType}] from ${data.name} ${data.company ? `(${data.company})` : ""}`,
      html: ownerHtml,
    });

    if (ownerRes.error) {
      console.error("[MAIL] Failed to deliver owner notification:", ownerRes.error);
      results.errors.push(ownerRes.error);
    } else {
      results.ownerDelivered = true;
    }
  } catch (err) {
    console.error("[MAIL] Owner email exception:", err);
    results.errors.push(err);
  }

  // 2. Send Professional Confirmation Receipt to Client
  try {
    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0b132b; padding: 28px 24px; color: #ffffff; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Mitraweb Consulting</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">Custom Software Development & Enterprise Digital Solutions</p>
        </div>

        <div style="padding: 28px 24px;">
          <p style="margin: 0 0 16px 0; font-size: 15px; color: #0f172a; font-weight: 600;">Dear ${escapeHtml(data.name)},</p>
          
          <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.6; color: #334155;">
            Thank you for reaching out to <strong>Mitraweb Consulting</strong>. We have received your enquiry regarding <strong>${escapeHtml(data.projectType)}</strong>.
          </p>

          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <p style="margin: 0; font-size: 13px; color: #166534; line-height: 1.5;">
              <strong>What Happens Next:</strong> An experienced software architect is reviewing your operational goals and technical specifications. We will get in touch within <strong>24 business hours</strong> with initial architectural thoughts and next steps.
            </p>
          </div>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Your Submission Summary</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 4px 0; color: #64748b; width: 120px;">Project Type:</td>
                <td style="padding: 4px 0; color: #0f172a; font-weight: 600;">${escapeHtml(data.projectType)}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #64748b;">Budget Tier:</td>
                <td style="padding: 4px 0; color: #0f172a; font-weight: 600;">${escapeHtml(data.budget)}</td>
              </tr>
            </table>
          </div>

          <p style="margin: 20px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
            Need an urgent response or want to share documents under NDA? Reach out directly:
          </p>
          <ul style="margin: 8px 0 20px 0; padding-left: 20px; font-size: 13px; color: #334155; line-height: 1.6;">
            <li><strong>Email:</strong> <a href="mailto:${siteConfig.email}" style="color: #2563eb;">${siteConfig.email}</a></li>
            <li><strong>Phone / WhatsApp:</strong> <a href="tel:${siteConfig.phoneRaw}" style="color: #2563eb;">${siteConfig.phone}</a></li>
          </ul>

          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            &copy; ${new Date().getFullYear()} ${siteConfig.legalName}. All rights reserved.<br/>
            All technical discussions are governed by strict confidentiality and Non-Disclosure standards.
          </div>
        </div>
      </div>
    `;

    const clientRes = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: data.email,
      subject: `We've received your project enquiry - Mitraweb Consulting`,
      html: clientHtml,
    });

    if (clientRes.error) {
      console.warn("[MAIL] Client auto-responder notice (might require custom domain in Resend):", clientRes.error);
      results.errors.push(clientRes.error);
    } else {
      results.clientDelivered = true;
    }
  } catch (err) {
    console.warn("[MAIL] Client email exception:", err);
    results.errors.push(err);
  }

  return results;
}

/**
 * Dispatches detailed quote notification to the owner and confirmation receipt to the client.
 */
export async function sendQuoteFormEmails(data: QuoteFormData) {
  if (!resend) {
    console.warn("[MAIL] RESEND_API_KEY is not set. Logging quote content instead:", data);
    return { success: true, mocked: true };
  }

  const results = {
    ownerDelivered: false,
    clientDelivered: false,
    errors: [] as any[],
  };

  // 1. Send Detailed Scope Notification to Owner
  try {
    const ownerHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0b132b; padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Detailed Scope Quote Request</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Mitraweb Consulting &bull; Interactive Scope Estimator</p>
        </div>

        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${escapeHtml(data.name)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Work Email</td>
              <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.email)}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(data.phone)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company / Website</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(data.company || "N/A")} ${data.website ? `(${escapeHtml(data.website)})` : ""}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Industry</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(data.industry)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Project Type</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${escapeHtml(data.projectType)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Budget Tier</td>
              <td style="padding: 8px 0; color: #16a34a; font-weight: 700;">${escapeHtml(data.budget)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Expected Timeline</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(data.timeline)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Target Platforms</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(data.targetPlatforms.join(", "))}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Required Features</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(data.requiredFeatures.join(", "))}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Current Tech / System</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(data.currentTech || "None / Greenfield")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Referral Source</td>
              <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(data.referralSource || "Website")}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Detailed Project Scope</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${escapeHtml(data.description)}</p>
          </div>
        </div>
      </div>
    `;

    const ownerRes = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: DEFAULT_TO_EMAIL,
      replyTo: data.email,
      subject: `New Scope Request: [${data.projectType}] from ${data.name} (${data.industry})`,
      html: ownerHtml,
    });

    if (ownerRes.error) {
      console.error("[MAIL] Failed to deliver quote notification to owner:", ownerRes.error);
      results.errors.push(ownerRes.error);
    } else {
      results.ownerDelivered = true;
    }
  } catch (err) {
    console.error("[MAIL] Quote owner email exception:", err);
    results.errors.push(err);
  }

  // 2. Send Confirmation to Client
  try {
    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0b132b; padding: 28px 24px; color: #ffffff; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Mitraweb Consulting</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">Custom Software Solutions & Technical Advisory</p>
        </div>

        <div style="padding: 28px 24px;">
          <p style="margin: 0 0 16px 0; font-size: 15px; color: #0f172a; font-weight: 600;">Dear ${escapeHtml(data.name)},</p>
          
          <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.6; color: #334155;">
            Thank you for completing our interactive scope estimator. We have received your specifications for <strong>${escapeHtml(data.projectType)}</strong>.
          </p>

          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <p style="margin: 0; font-size: 13px; color: #166534; line-height: 1.5;">
              <strong>Estimated Timeline for Review:</strong> A senior engineering lead is evaluating your target platforms (<em>${escapeHtml(data.targetPlatforms.join(", "))}</em>) and architecture requirements. You will receive an itemized scoping outline and initial budgetary assessment within <strong>24 to 48 business hours</strong>.
            </p>
          </div>

          <p style="margin: 20px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
            If you need to discuss your timeline urgently or sign an NDA beforehand, please reach out directly:
          </p>
          <ul style="margin: 8px 0 20px 0; padding-left: 20px; font-size: 13px; color: #334155; line-height: 1.6;">
            <li><strong>Email:</strong> <a href="mailto:${siteConfig.email}" style="color: #2563eb;">${siteConfig.email}</a></li>
            <li><strong>Phone / WhatsApp:</strong> <a href="tel:${siteConfig.phoneRaw}" style="color: #2563eb;">${siteConfig.phone}</a></li>
          </ul>

          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            &copy; ${new Date().getFullYear()} ${siteConfig.legalName}. All rights reserved.
          </div>
        </div>
      </div>
    `;

    const clientRes = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: data.email,
      subject: `Your Project Scope Estimate Request - Mitraweb Consulting`,
      html: clientHtml,
    });

    if (clientRes.error) {
      console.warn("[MAIL] Client quote receipt notice:", clientRes.error);
      results.errors.push(clientRes.error);
    } else {
      results.clientDelivered = true;
    }
  } catch (err) {
    console.warn("[MAIL] Client quote email exception:", err);
    results.errors.push(err);
  }

  return results;
}

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
