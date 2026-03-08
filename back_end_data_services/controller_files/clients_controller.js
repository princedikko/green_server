import clientsDataAccessObject from "../data_access_objects/clients_DAO.js";
import sendNotification from "../data_access_objects/notificationDOA.js";
import S3Service from "../services/s3Service.js"; // Import S3 service

export default class clientsController {
  static async clientsLogin(req, res, next) {
    try {
      const username = req.body.user_name;
      const password = req.body.stud_password;

      const response = await clientsDataAccessObject.clientsignIn(
        username,
        password,
      );
      res.json({
        status: response.status,
        message: response.message,
        info: response.found,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
