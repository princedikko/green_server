// controllers/emailController.mjs
import sendNotification from "../data_access_objects/notificationDOA.js";

export default class sendNoficationController {
  static async apiSendEmail(req, res, next) {
    try {
      const fname = req.body.first_name;
      const sname = req.body.sur_name;
      const oname = req.body.other_name;
      const applino = req.params.appNo;
      const programme = req.body.programme_of_study;
      const RRR = req.body.ref_number;
      const transId = req.body.transaction_id;
      const appl_email = req.body.email;

      await sendNotification.sendEmail(
        fname,
        sname,
        oname,
        applino,
        programme,
        RRR,
        transId,
        appl_email
      );

      res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email");
    }
  }
  // static async apiSendSms(req, res, next) {
  //   const fname = req.body.first_name;
  //   const sname = req.body.sur_name;
  //   const oname = req.body.other_name;
  //   const applino = req.body.application_number;
  //   const programme = req.body.programme_of_study;
  //   const phoneNumber = "08063996056";
  //   try {
  //     const message = `Application successful. Application No: ${applino}, Name: ${
  //       fname + " " + sname + " " + oname
  //     },
  //      Programme: ${programme}`;
  //     // Send SMS
  //     await sendNotification.sendSms(message, phoneNumber);

  //     res
  //       .status(200)
  //       .json({ message: "Registration complete. SMS notification sent." });
  //   } catch (error) {
  //     console.error("Error sending SMS:", error);
  //     res.status(500).send("Failed to send SMS");
  //   }
  // }
}
// export const sendEmail = async (req, res) => {
//   const {
//     first_name,
//     sur_name,
//     other_name,
//     application_number,
//     programme_of_study,
//     ref_number,
//     transaction_id,
//     email,
//   } = req.body;
//   const to = req.body.email;
//   try {
//     await sendEmailService(
//       first_name,
//       sur_name,
//       other_name,
//       application_number,
//       email,
//       programme_of_study,
//       ref_number,
//       transaction_id
//     );
//     res.status(200).send("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Failed to send email");
//   }
// };
