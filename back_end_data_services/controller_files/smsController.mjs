// controllers/smsController.mjs
import { sendSMS as sendSMSService } from "../data_access_objects/smsService.mjs";

export const sendSMS = async (req, res) => {
  const { phoneNumber, message } = req.body;
  try {
    await sendSMSService(phoneNumber, message);
    res.status(200).send("SMS sent successfully");
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).send("Failed to send SMS");
  }
};
