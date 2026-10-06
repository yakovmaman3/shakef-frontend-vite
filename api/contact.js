import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      message,
    } = req.body || {};

    const cleanName = String(name || "").trim();
    const cleanEmail = String(email || "").trim();
    const cleanPhone = String(phone || "").trim();
    const cleanMessage = String(message || "").trim();

    if (
      !cleanName ||
      !cleanMessage ||
      (!cleanEmail && !cleanPhone)
    ) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 150 ||
      cleanPhone.length > 50 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        error: "Invalid field length",
      });
    }

    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_APP_PASSWORD
    ) {
      console.error("Missing Gmail environment variables");

      return res.status(500).json({
        success: false,
        error: "Mail service is not configured",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"אתר שקף" <${process.env.GMAIL_USER}>`,

      to:
        process.env.CONTACT_TO ||
        "yakovmaman3@gmail.com",

      replyTo: cleanEmail || undefined,

      subject: `פנייה חדשה מאתר שקף – ${cleanName}`,

      text: [
        "פנייה חדשה מאתר שקף",
        "",
        `שם: ${cleanName}`,
        `טלפון: ${cleanPhone || "לא נמסר"}`,
        `אימייל: ${cleanEmail || "לא נמסר"}`,
        "",
        "הודעה:",
        cleanMessage,
      ].join("\n"),
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Contact form email error:",
      error
    );

    return res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
}