import { ObjectId } from "mongodb";

let examinationDB;

export default class baseTestExamsDAO {
  static async injectExamsDB(connections) {
    if (examinationDB) {
      return;
    }
    try {
      examinationDB = await connections
        .db("examination_data_base")
        .collection("exams_queue");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the staffDB data base and collections ${err}`
      );
    }
  }

  // ******* STATICS FUNCTIONS FOR ACCESSING DATA BASE COLLECTIONS ******

  static async uploadExamsQueue(payload) {
    try {
      const { insertedId } = await examinationDB.insertOne(payload);
      const response = await examinationDB.findOne({
        _id: new ObjectId(insertedId),
      });
      return {
        status: 201,
        message: "Exams Queue Uploaded successfully",
        data: response,
      };
    } catch (err) {
      console.log("error uploading exams queue data", err);
    }
  }

  static async getExamsQueue(_id, subjects, programme) {
    try {
      const response = await examinationDB
        .find({ subject: { $in: subjects }, programme: programme })
        .toArray();
      return {
        status: 200,
        message: "Exams Queue fetched successfully",
        data: response,
      };
    } catch (err) {
      console.log("error fetching exams queue data", err);
    }
  }
}
