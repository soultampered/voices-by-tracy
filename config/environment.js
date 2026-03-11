const nodeEnv = process.env.NODE_ENV || "development";

const requiredServerEnvVars = [
    "MONGODB_URI",
    "EMAIL",
    "EMAIL_PASS",
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
];

const missingServerEnvVars = requiredServerEnvVars.filter((key) => !process.env[key]);

if (missingServerEnvVars.length > 0) {
    throw new Error(
        `Missing required environment variable(s): ${missingServerEnvVars.join(", ")}`
    );
}

export const environment = {
    nodeEnv,
    isDevelopment: nodeEnv === "development",
    isProduction: nodeEnv === "production",
    mongodbUri: process.env.MONGODB_URI,
    email: process.env.EMAIL,
    emailPass: process.env.EMAIL_PASS,
    i18nexusApiKey: process.env.I18NEXUS_API_KEY || "",
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
};