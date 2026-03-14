import clientsDataAccessObject from "../data_access_objects/inventory_DAO.js";

export default class clientsController {
  static async clientsLogin(req, res, next) {
    try {
      const username = req.body.user_name;
      const password = req.body.stud_password;

      const response = await clientsDataAccessObject.clientSignIn(
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
  static async userLogin(req, res, next) {
    try {
      const username = req.body.user_name;
      const password = req.body.stud_password;

      const response = await clientsDataAccessObject.apiSignUser(
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
