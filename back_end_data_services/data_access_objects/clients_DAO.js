import { response } from "express";
import nodemailer from "nodemailer";
import { ObjectId } from "mongodb";

let new_clients, clients, sales;

export default class clientsDataAccessObject {
  // * STATICS FUNCTIONS FOR DATA BASE INJECTIONS
  static async injectClientsRegDB(connections) {
    if (new_clients) {
      return;
    }
    try {
      new_clients = await connections
        .db("green_clients")
        .collection("clients_informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the clients data base and collections ${err}`,
      );
    }
  }
  static async injectClients(connections) {
    if (clients) {
      return;
    }
    try {
      clients = await connections
        .db("skillpoint_clients")
        .collection("clients_informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the clients data base and collections FOR LOGIN ${err}`,
      );
    }
  }

  // * STATICS FUNCTIONS FOR ACCESSING DATA BASE COLLECTIONS
  static async clientSignIn(username, password) {
    try {
      const found = await clients.findOne({
        "auth.loginUsername": username,
      });

      if (found) {
        if (username === found.auth.loginUsername) {
          if (found.auth.hashedPassword === password) {
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
  static async apiSignUser(username, password) {
    try {
      const found = await clients.findOne({
        "auth.loginUsername": username,
      });

      if (found) {
        if (username === found.auth.loginUsername) {
          if (found.auth.hashedPassword === password) {
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
