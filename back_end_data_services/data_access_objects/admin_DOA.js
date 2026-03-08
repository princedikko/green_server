import { ObjectId } from "mongodb";

let mdDB;

export default class adminDataAccessObject {
  // ******* STATICS FUNCTIONS FOR DATA BASE INJECTIONS ******
  static async injectAdminDB(connections) {
    if (mdDB) {
      return;
    }
    try {
      mdDB = await connections
        .db("mdDB-data-base")
        .collection("mdDB-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the mdDB data base and collections ${err}`,
      );
    }
  }

  // ******* STATICS FUNCTIONS FOR ACCESSING DATA BASE COLLECTIONS ******

  static async registeradmin(payload) {
    try {
      const $existed = await mdDB.findOne({
        "auth.loginUsername": payload.auth.loginUsername,
      });
      if ($existed) {
        return {
          status: 203,
          message: "User already Existed",
          data: null,
        };
      } else {
        const executeNewApplicationNumber = await mdDB.find().toArray();
        if (executeNewApplicationNumber) {
          const allClient = executeNewApplicationNumber.length + 1;
          const { insertedId } = await mdDB.insertOne(payload);
          // Retrieve the newly inserted document
          const appData = await mdDB.findOne({
            _id: new ObjectId(insertedId),
          });
          return {
            status: 201,
            message: "Application Form Submitted successfully",
            data: appData,
          };
        } else {
          throw new Error("Unable to fetch mdDB.");
        }
      }
    } catch (error) {
      console.log(`student registration fails ${error}`);
      return error;
    }
  }

  static async adminSignIn(adminUsername, adminLoginPassword) {
    try {
      const found = await mdDB.findOne({ email: adminUsername });
      if (found) {
        if (adminUsername == found.email) {
          if (found.auth.passwordHash == adminLoginPassword) {
            return {
              status: 201,
              found: found,
              message: "Masha Allaah, Login was successfully",
            };
          } else {
            return {
              status: 401,
              found: null,
              message: "Incorrect password",
            };
          }
        }
      } else
        return {
          status: 401,
          found: null,
          message: "Username not found",
        };
    } catch (err) {
      console.log(err);
    }
  }
  static async getAdministrations() {
    try {
      const found = await mdDB.find().toArray();
      return {
        status: 201,
        found: found,
        message: "Administration found successfully",
      };
    } catch (err) {
      console.log(err);
    }
  }
}
