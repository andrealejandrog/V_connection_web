import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

// Initialize Firebase Admin SDK if it hasn't been initialized elsewhere
if (!admin.apps.length) {
    admin.initializeApp();
}

// Define the interface for the expected form data.
interface ContactFormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    company?: string; // 'company' is optional
    comments: string;
}

// Configure the email transporter with your Gmail credentials.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().gmail?.email,
        pass: functions.config().gmail?.password,
    },
});

/**
 * HTTP callable function to process the contact form.
 * It expects form data and sends an email.
 */
export const submitContactForm = functions.https.onCall(async (data: any, context) => {
    // Correctly extract the actual data payload from the 'data' parameter.
    // The actual form data sent by the client is the 'data' argument itself in callable functions.
    // We explicitly cast 'data' to 'ContactFormData'.
    const formData = data as ContactFormData;

    // --- 1. Data Validation ---
    const { firstName, lastName, phone, email, company, comments } = formData;

    // Check for missing required fields
    if (!firstName || !lastName || !phone || !email || !comments) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Missing one or more required form fields: First Name, Last Name, Phone, Email, Comments.'
        );
    }

    // Basic email format validation using a more robust regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Invalid email format. Please provide a valid email address.'
        );
    }

    // Basic phone number format validation
    const phoneRegex = /^\+?[0-9\s-()]{7,20}$/;
    if (!phoneRegex.test(phone)) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Invalid phone number format. Please provide a valid phone number.'
        );
    }

    // --- 2. Email Content Creation ---
    const mailOptions = {
        from: `"${firstName} ${lastName}" <${email}>`,
        to: functions.config().gmail?.email,
        subject: `New contact message from ${firstName} ${lastName} (V-Connection Website)`,
        html: `
            <p>You have received a new message from the contact form on your V-Connection website.</p>
            <h3>Contact Details:</h3>
            <ul>
                <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Company:</strong> ${company || 'N/A'}</li>
            </ul>
            <h3>Comments:</h3>
            <p>${comments}</p>
            <br>
            <p>You can reply directly to this person at: <a href="mailto:${email}">${email}</a></p>
        `,
    };

    // --- 3. Sending the Email ---
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return { success: true, message: 'Your message has been sent successfully! We will get back to you soon.' };
    } catch (error) {
        console.error('Error sending email:', error);
        if (error instanceof functions.https.HttpsError) {
            throw error;
        }
        throw new functions.https.HttpsError(
            'internal',
            'Failed to send your message. Please try again later or contact support.',
            (error as Error).message || 'Unknown error'
        );
    }
});