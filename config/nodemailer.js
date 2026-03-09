import nodemailer from "nodemailer";
import { environment } from "./environment";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: environment.email,
        pass: environment.emailPass,
    },
});

export const mailOptions = {
    from: environment.email,
    to: environment.email,
};