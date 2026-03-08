// dao/emailService.mjs
import nodemailer from "nodemailer";

export default class sendNotification {
  static async sendEmail(
    firstName,
    surName,
    otherName,
    application_number,
    programme,
    refNumber,
    transactionId,
    email_address,
  ) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email_address,
        subject:
          "Application Confirmation – Your Application Number for Manga College of Nursing Sciences Zuru",
        html: `
         <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  <!-- Banner Section -->
  <div style="text-align: center; background-color: #004080; color: white; padding: 20px;">
    <img
      src="https://mangaconszurufilesbucket.s3.eu-north-1.amazonaws.com/1738318365114_Manga_Cons _Logo.png"
      alt="mangacons"
      style="max-width: 18.5rem; height: auto; display: block; margin: 0 auto; border-radius: 8px 8px 0 0;"
    />
    <h1 style="margin: 10px 0; font-size: 24px; text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);">
      Welcome to Manga College of Nursing Sciences
    </h1>
  </div>

  <!-- Email Content -->
  <div style="padding: 20px; background-color: #f9f9f9;">
    <h2 style="color: #333;">Dear ${
      firstName + " " + surName + " " + otherName
    },</h2>
    <p style="color: #555;">
      We are pleased to confirm that your registration has been successfully completed, and your application has been included in the admission process at Manga College of Nursing Sciences Zuru.
    </p>

    <h3 style="color: #444;">Your Application Number:</h3>
    <p style="font-size: 18px; font-weight: 300; color: #222;">${application_number}</p>
    <p style="color: #555;">
      Please take note of your unique application number above. You will need this number to log in and continue with the next steps of your application.
    </p>

    <h3 style="color: #444;">Programme of Study:</h3>
    <p style="font-size: 18px; font-weight: 400; color: #222;">${programme}</p>
    <p style="color: #555;">
      We are delighted to confirm your selected programme of study at Manga College of Nursing Sciences Zuru. You have chosen to pursue a course in ${programme}, and we’re excited to support you on this path.
    </p>

    <h3 style="color: #444;">Payment Confirmation:</h3>
    <p style="color: #555;">
      We have received your payment successfully. Below are the details of your payment:
    </p>
    <p><strong>Reference Number:</strong> ${refNumber}</p>
    <p><strong>Transaction ID:</strong> ${transactionId}</p>

    <h3 style="color: #444;">Next Steps:</h3>
    <p style="color: #555;">
      To proceed, please use your application number to log in to our applicant portal. Your application number will be required to access your account and complete any remaining steps.
    </p>

    <h3 style="color: #444;">Need Help?</h3>
    <p style="color: #555;">
      If you have any questions or require assistance, don’t hesitate to reach out to us at
      <a href="mailto:${
        process.env.EMAIL_USER
      }" style="color: #1a73e8; text-decoration: none;">${
        process.env.EMAIL_USER
      }</a>
      or call us at +234 806 399 6056. Our team is here to support you throughout the process.
    </p>

    <p style="color: #555;">
      Thank you for choosing Manga College of Nursing Sciences Zuru. We’re excited to assist you on your path to a rewarding career in nursing!
    </p>

    <p style="color: #555;">
      Warm regards,<br />
      Admissions Team<br />
      Manga College of Nursing Sciences Zuru
    </p>
  </div>
</div>
        `,
      };
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.log(err);
    }
  }
  // static async sendSms(message, phoneNumber) {
  //   try {
  //     const response = await axios.post(BULK_SMS_URL, {
  //       api_token: BULK_SMS_API_KEY,
  //       to: phoneNumber,
  //       from: "MangaCollege",
  //       body: message,
  //       dnd: 2, // Do Not Disturb option
  //     });

  //     return response.data; // Return the response data
  //   } catch (error) {
  //     throw new Error(`Error sending SMS: ${error.message}`);
  //   }
  // }
}
