import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, message, cell} = body;

    const transporter = nodemailer.createTransport({
      host: "mail.aplusdrivingschl.com",
      port:465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      
      },
    });



    const mailOption = {
      from: email,
      to: ["connect@aplusdrivingschl.com","tenacious@aplusdrivingschl.com"],
      subject: "Product Inquiry",
      html: `<p>Hi There!,</p><p>${message}</p> <p>Best Regards,</p> <p>${name}</p> <p>Contact No,</p> <p>${cell}</p>`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email sent succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
