import { NextRequest, NextResponse } from "next/server";
import { demoRequestSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate request body against Zod Schema
    const validationResult = demoRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form input data",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Honeypot bot protection check
    if (data.website_url && data.website_url.trim().length > 0) {
      // Quietly reject bot submissions without triggering errors
      return NextResponse.json({ success: true, message: "Request received" });
    }

    // 3. Log submission in server logs
    console.log("==========================================");
    console.log("PRIMA SFA NEW DEMO REQUEST RECEIVED:");
    console.log(`Name: ${data.fullName}`);
    console.log(`Company: ${data.company}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`Email: ${data.email || "N/A"}`);
    console.log(`Team Size: ${data.teamSize}`);
    console.log(`Message: ${data.message || "N/A"}`);
    console.log("==========================================");

    // TODO: Connect external integrations via environment variables:
    // - Send notification to Slack/Teams webhook: process.env.SLACK_WEBHOOK_URL
    // - Send notification email via Resend/SendGrid: process.env.RESEND_API_KEY
    // - Append lead to CRM (HubSpot/Salesforce) or Google Sheets: process.env.CRM_API_KEY

    const webhookUrl = process.env.DEMO_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `🚀 *New Prima SFA Demo Lead*\n*Name:* ${data.fullName}\n*Company:* ${data.company}\n*Phone:* ${data.phone}\n*Fleet:* ${data.teamSize}\n*Email:* ${data.email || "None"}`,
          }),
        });
      } catch (webhookErr) {
        console.error("Failed to forward demo lead to webhook:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your demo request has been received. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Demo request API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
