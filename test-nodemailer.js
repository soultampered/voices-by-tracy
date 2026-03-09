const nodemailer = require("nodemailer");

const testEmail = async () => {
    try {
        const { environment } = await import("./config/environment.js");

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: environment.email,
                pass: environment.emailPass,
            },
        });

        const mailOptions = {
            from: environment.email,
            to: environment.email,
        };

        await transporter.sendMail({
            ...mailOptions,
            subject: "Test Email",
            text: "This is a test email.",
        });

        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

testEmail();