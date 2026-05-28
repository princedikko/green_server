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
        "auth.user.email": username,
      });

      if (found) {
        if (username === found.auth.user.email) {
          if (found.auth.credentials.hashedPassword === password) {
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
          if (found.auth.credentials.hashedPassword === password) {
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

  static async postNewRegister(payload) {
    try {
      // Validate payload
      if (!payload) {
        return {
          status: 400,
          message: "Payload is required",
          info: null,
        };
      }

      // Extract email and phone number
      const email = payload?.owner?.personalInfo?.email || "";
      const phoneNumber = payload?.owner?.personalInfo?.phone || "";

      // Check for form validations
      if (
        !payload?.owner?.personalInfo?.firstName ||
        !payload?.owner?.personalInfo?.surName ||
        !payload?.owner?.personalInfo?.email ||
        !payload?.owner?.personalInfo?.phone ||
        !payload?.owner?.personalInfo?.gender ||
        !payload?.owner?.personalInfo?.nationality
      ) {
        return {
          status: 400,
          message: "Please fill all the required fields",
          info: null,
        };
      }
      // Check existing email
      const existingEmail = await clients.findOne({
        "owner.personalInfo.email": email,
      });

      // Check existing phone number
      const existingPhone = await clients.findOne({
        "owner.personalInfo.phone": phoneNumber,
      });

      if (existingPhone) {
        return {
          status: 409,
          message: "Phone number already exists",
          info: null,
        };
      } else if (existingEmail) {
        return {
          status: 409,
          message: "Email already exists",
          info: null,
        };
      } else {
        // Count total clients
        const totalClients = await clients.countDocuments();

        // Generate client ID
        const clientId = `CLT-${new Date().getFullYear()}-${String(
          totalClients + 1,
        ).padStart(6, "0")}`;

        // Attach client ID
        payload.clientId = clientId;

        // Insert client
        const { insertedId } = await clients.insertOne(payload);

        // Retrieve inserted client
        const response = await clients.findOne({
          _id: new ObjectId(insertedId),
        });

        // Check insertion success
        if (!response) {
          return {
            status: 500,
            message: "Failed to retrieve registered client",
            info: null,
          };
        }

        console.log(`New client registered: ${clientId}`);

        return {
          status: 201,
          message: "Registered successfully",
          info: response,
        };
      }
    } catch (err) {
      console.error("Error handling registration:", err);

      return {
        status: 500,
        message: "Internal server error",
        info: null,
      };
    }
  }
}
