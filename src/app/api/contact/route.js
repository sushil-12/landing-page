import sendMail from "@/utils/sendMail";

export async function POST(request) {
    const { firstName, lastName, email, telegramId, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
        return new Response(JSON.stringify({ error: 'All fields are required except Telegram ID.' }), { status: 400 });
    }

    const mailOptions = {
        from: `"${firstName} ${lastName}" <${email}>`,
        to: "he0803testing@gmail.com",
        subject: `New message from ${firstName} ${lastName}`,
        text: `You have a new message from ${firstName} ${lastName} (${email}${telegramId ? ` - Telegram ID: ${telegramId}` : ''}):\n\n${message}`,
        html: `<p>You have a new message from <strong>${firstName} ${lastName}</strong> (${email}${telegramId ? ` - Telegram ID: ${telegramId}` : ''}):</p><p>${message}</p>`,
    };

    try {
        await sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully.' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
    }
}
