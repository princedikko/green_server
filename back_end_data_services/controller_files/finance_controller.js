import financeDataAccessObject from "../data_access_objects/finance_DAO.js";

export default class financeController {
  static async financeLogin(req, res, next) {
    try {
      const financeUsername = req.body.user_name;
      const financeLoginPassword = req.body.finance_password;

      const response = await financeDataAccessObject.financeSignIn(
        financeUsername,
        financeLoginPassword
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
