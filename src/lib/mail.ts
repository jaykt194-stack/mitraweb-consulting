import nodemailer from "nodemailer";
import { Resend } from "resend";
import { siteConfig } from "@/data/siteConfig";

// Configuration for Google Workspace / Gmail
const GMAIL_USER = process.env.GMAIL_USER || process.env.SMTP_USER || "support@mitrawebconsulting.net";
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

// Configuration for Resend (Alternative fallback)
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "support@mitrawebconsulting.net";
const FROM_NAME = "Mitraweb Consulting";

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
 * Returns a Nodemailer transporter configured for Google Workspace / Gmail SMTP
 */
function getGoogleTransporter() {
  if (!GMAIL_PASS) return null;

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465 with SSL
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS.replace(/\s+/g, ""), // strips any accidental spaces from Google 16-char app password
    },
  });
}

/**
 * Internal helper to send an email via Google SMTP or fallback to Resend
 */
async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const googleTransport = getGoogleTransporter();

  // 1. Try Google Service First (Nodemailer)
  if (googleTransport) {
    try {
      const info = await googleTransport.sendMail({
        from: `"${FROM_NAME}" <${GMAIL_USER}>`,
        to,
        subject,
        html,
        replyTo: replyTo || GMAIL_USER,
      });
      console.log(`[MAIL_GOOGLE_SUCCESS] Sent to: ${to}, MessageId: ${info.messageId}`);
      return { success: true, provider: "google", id: info.messageId };
    } catch (err) {
      console.error(`[MAIL_GOOGLE_ERROR] Failed to send via Google SMTP:`, err);
      // Fall through to Resend if Google SMTP encounters authentication error
    }
  }

  // 2. Fallback to Resend if configured
  if (resend) {
    try {
      const fromAddress = process.env.RESEND_FROM_EMAIL || `Mitraweb Consulting <onboarding@resend.dev>`;
      const res = await resend.emails.send({
        from: fromAddress,
        to,
        subject,
        html,
        replyTo,
      });
      if (res.error) {
        console.error(`[MAIL_RESEND_ERROR]`, res.error);
        return { success: false, error: res.error };
      }
      return { success: true, provider: "resend", id: res.data?.id };
    } catch (err) {
      console.error(`[MAIL_RESEND_EXCEPTION]`, err);
      return { success: false, error: err };
    }
  }

  // 3. Fallback: Log if no credentials are configured
  console.warn(`[MAIL_MOCK] Neither Google App Password nor Resend Key configured. Mock email to ${to}: ${subject}`);
  return { success: true, provider: "mock" };
}

/**
 * Dispatches notification to owner and confirmation receipt to visitor.
 */
export async function sendContactFormEmails(data: ContactFormData) {
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
          <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Project Requirements</p>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${escapeHtml(data.description)}</p>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
          Click "Reply" to respond directly to ${escapeHtml(data.name)} (${escapeHtml(data.email)}).
        </div>
      </div>
    </div>
  `;

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
            <strong>What Happens Next:</strong> An experienced software architect is reviewing your operational requirements. We will contact you within <strong>24 business hours</strong> with initial architectural guidance and next steps.
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
          Need an urgent response or want to share documents under NDA? Contact us directly:
        </p>
        <ul style="margin: 8px 0 20px 0; padding-left: 20px; font-size: 13px; color: #334155; line-height: 1.6;">
          <li><strong>Email:</strong> <a href="mailto:${siteConfig.email}" style="color: #2563eb;">${siteConfig.email}</a></li>
          <li><strong>Phone / WhatsApp:</strong> <a href="tel:${siteConfig.phoneRaw}" style="color: #2563eb;">${siteConfig.phone}</a></li>
        </ul>

        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
          &copy; ${new Date().getFullYear()} ${siteConfig.legalName}. All rights reserved.<br/>
          All discussions are governed by strict confidentiality and Non-Disclosure standards.
        </div>
      </div>
    </div>
  `;

  // Send Owner Notification
  const ownerResult = await sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: `New Lead: [${data.projectType}] from ${data.name} ${data.company ? `(${data.company})` : ""}`,
    html: ownerHtml,
    replyTo: data.email,
  });

  // Send Client Confirmation
  const clientResult = await sendEmail({
    to: data.email,
    subject: `We've received your project enquiry - Mitraweb Consulting`,
    html: clientHtml,
  });

  return { ownerResult, clientResult };
}

/**
 * Dispatches detailed quote notification to owner and confirmation receipt to visitor.
 */
export async function sendQuoteFormEmails(data: QuoteFormData) {
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

  // Send Owner Notification
  const ownerResult = await sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: `New Scope Request: [${data.projectType}] from ${data.name} (${data.industry})`,
    html: ownerHtml,
    replyTo: data.email,
  });

  // Send Client Confirmation
  const clientResult = await sendEmail({
    to: data.email,
    subject: `Your Project Scope Estimate Request - Mitraweb Consulting`,
    html: clientHtml,
  });

  return { ownerResult, clientResult };
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
