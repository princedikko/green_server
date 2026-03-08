import { ObjectId } from "mongodb";

let financeCollection;

export default class financeDataAccessObject {
  // ******* STATICS FUNCTIONS FOR DATA BASE INJECTIONS ******
  static async injectfinanceDB(connections) {
    if (financeCollection) {
      return;
    }
    try {
      financeCollection = await connections
        .db("finance-data-base")
        .collection("finance-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the financeCollection data base and collections ${err}`
      );
    }
  }

  // ******* STATICS FUNCTIONS FOR ACCESSING DATA BASE COLLECTIONS ******

  static async financeSignIn(financeUsername, financeLoginPassword) {
    try {
      const found = await financeCollection.findOne({ email: financeUsername });
      if (found) {
        if (financeUsername == found.email) {
          if (found.auth.passwordHash == financeLoginPassword) {
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
}
