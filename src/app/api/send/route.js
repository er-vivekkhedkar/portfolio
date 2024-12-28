import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const htmlContent = `
      <p><strong>From:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p>${message}</p>
    `;

    const emailData = {
      from: "vivekkhedkar110@gmail.com", // Verified email address
      to: "vivekkhedkar110@gmail.com", // Your Gmail address to receive messages
      subject: `New Message from ${email}: ${subject}`,
      html: htmlContent,
    };

    // Send the email
    const response = await resend.emails.send(emailData);

    console.log("Email sent successfully:", response);
    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send message" });
  }
}
