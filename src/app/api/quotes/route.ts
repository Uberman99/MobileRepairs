import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Get email credentials from environment variables
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const recipientEmail = process.env.EMAIL_RECIPIENT;

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const quoteSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(100),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().max(20).optional(),
  details: z.string().min(10, { message: 'Details must be at least 10 characters.' }).max(500),
});

export async function POST(request: Request) {
  // Server-side validation to ensure credentials are set up
  if (!emailUser || !emailPass || !recipientEmail) {
    console.error('Email credentials are not configured in .env.local');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  try {
    const requestBody = await request.json();
    const validation = quoteSchema.safeParse(requestBody);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const { name, email, phone, details } = validation.data;

    // Define the email options
    const mailOptions = {
      from: `\"Revive Repairs Quote Request\" <${emailUser}>`,
      to: recipientEmail,
      subject: `New Quote Request from ${name}`,
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Client's Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <h2>Issue Details:</h2>
        <p>${details.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Quote request sent successfully!' }, { status: 200 });

  } catch (e) {
    console.error('API Route Error:', e);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
