import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// Data Access files
import productDataAccessObject from "./back_end_data_services/data_access_objects/product_DAO.js";
import financeDataAccessObject from "./back_end_data_services/data_access_objects/finance_DAO.js";
import systemAdminDataAccessObject from "./back_end_data_services/data_access_objects/system-admin_DAO.js";
import clientsDataAccessObject from "./back_end_data_services/data_access_objects/clients_DAO.js";
import adminDataAccessObject from "./back_end_data_services/data_access_objects/admin_DOA.js";

const MongoClient = mongodb.MongoClient;
const port = process.env.HOSTED_PORT || 8080;

MongoClient.connect(process.env.DATA_BASE_CONN_URI, {
  wtimeoutMS: 2500,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await productDataAccessObject.injectProductDB(client);
    // System Adminstration Injections******************************
    await systemAdminDataAccessObject.injectsystemAdminDB(client);
    await systemAdminDataAccessObject.injectadminStaffDB(client);
    await systemAdminDataAccessObject.injectfinanceDB(client);
    // ----------------------------------------------------------//
    await adminDataAccessObject.injectAdminDB(client);
    await financeDataAccessObject.injectfinanceDB(client);
    await clientsDataAccessObject.injectClientsRegDB(client);
    await clientsDataAccessObject.injectClients(client);
    app.listen(port, () => {
      console.log(`Masha Allaah, software running on the port: ${port}`);
    });
  });
