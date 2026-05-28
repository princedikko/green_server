import clientsDataAccessObject from "../data_access_objects/clients_DAO.js";

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
        status: response?.status,
        message: response?.message,
        clientInfo: response?.found,
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

  static async apiPostNewRegister(req, res, next) {
    try {
      const payload = req.body;
      const response = await clientsDataAccessObject.postNewRegister(payload);
      console.log(payload);
      res.json({
        status: response.status,
        message: response.message,
        newClient: response.found,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
