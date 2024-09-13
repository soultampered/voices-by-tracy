// app/api/mailroute/route.js

import { mailOptions, transporter } from "/config/nodemailer";

export async function POST(req) {
    try {
        const data = await req.json();

        if (!data.name || !data.email || !data.subject || !data.message) {
            return new Response(JSON.stringify({ message: 'Bad request: Missing required fields' }), { status: 400 });
        }

        await transporter.sendMail({
            ...mailOptions,
            subject: data.subject,
            text: `Message from: ${data.name} <${data.email}>\n\n${data.message}`,
            html: `<h1>${data.subject}</h1><p>${data.message}</p><p>From: ${data.name} (${data.email})</p>`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), { status: 500 });
    }
}
