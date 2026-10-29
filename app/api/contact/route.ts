import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate request body against Zod Schema
    const validationResult = contactFormSchema.safeParse(body);

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
      return NextResponse.json({ success: true, message: "Request received" });
    }

    // 3. Log submission in server logs
    console.log("==========================================");
    console.log("NEW SALESFORCE.LK CONTACT FORM INQUIRY:");
    console.log(`Name: ${data.firstName} ${data.lastName || ""}`);
    console.log(`Email: ${data.email}`);
    console.log(`Phone: ${data.phone || "N/A"}`);
    console.log(`Company: ${data.company || "N/A"} (${data.jobTitle || "N/A"})`);
    console.log(`Source: ${data.source || "N/A"}`);
    console.log(`Message: ${data.message}`);
    console.log("==========================================");

    // 4. Webhook forwarding if configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL || process.env.DEMO_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `📩 *New Consultation Inquiry*\n*Name:* ${data.firstName} ${data.lastName || ""}\n*Email:* ${data.email}\n*Phone:* ${data.phone || "N/A"}\n*Company:* ${data.company || "N/A"}\n*Message:* ${data.message}`,
          }),
        });
      } catch (webhookErr) {
        console.error("Failed to forward contact inquiry to webhook:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Our team will contact you within one business day.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
