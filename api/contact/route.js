import { sendMail } from '@/lib/mail';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
        }

        // Use sendMail to send the email
        await sendMail(
            process.env.SMTP_EMAIL,
            name,
            subject,
            `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p> <!-- The user's input email -->
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        );

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error sending the email.' }), { status: 500 });
    }
}

