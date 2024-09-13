// test-nodemailer.js

const nodemailer = require('nodemailer');
const { EMAIL, EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS,
    },
});

const mailOptions = {
    from: EMAIL,
    to: EMAIL
};

const testEmail = async () => {
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: 'Test Email',
            text: 'This is a test email.',
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

testEmail();
