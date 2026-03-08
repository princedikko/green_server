import adminDataAccessObject from "../data_access_objects/admin_DOA.js";

export default class adminController {
  static async adminRegistration(req, res, next) {
    try {
      const payload = req.body;

      await adminDataAccessObject.registeradmin(payload);

      res.json({ status: "Masha Allah, New Admin Registered Successfully" });
    } catch (error) {
      console.log(error);
    }
  }

  static async adminLogin(req, res, next) {
    try {
      const adminUsername = req.body.user_name;
      const adminLoginPassword = req.body.admin_password;

      const response = await adminDataAccessObject.adminSignIn(
        adminUsername,
        adminLoginPassword,
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
  static async apiGetAdministrations(req, res, next) {
    try {
      const response = await adminDataAccessObject.getAdministrations();
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
