import baseTestExamsDAO from "../../data_access_objects/base_test_data_access_files/base_test_exams_dao.js";
export default class baseTestExamsController {
  static async apiUploadExamsQueue(req, res, next) {
    try {
      const payload = req.body;

      const response = await baseTestExamsDAO.uploadExamsQueue(payload);
      const totalData = response.length;
      res.json({
        status: response.status,
        message: response.message,
        data: response.data,
        Counts: totalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetQuestions(req, res, next) {
    try {
      const _id = req.body.id;
      const programme = req.params.programme;
      const subjects = req.body;
      console.log(subjects);
      const response = await baseTestExamsDAO.getExamsQueue(
        _id,
        subjects,
        programme
      );
      const totalData = response.length;
      res.json({
        status: response.status,
        message: response.message,
        data: response.data,
        Counts: totalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
