import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// Data Access files
import inventoryDataAccessObject from "./back_end_data_services/data_access_objects/inventory_DAO.js";
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
    // System Adminstration Injections******************************
    await systemAdminDataAccessObject.injectsystemAdminDB(client);
    await systemAdminDataAccessObject.injectadminStaffDB(client);
    await systemAdminDataAccessObject.injectfinanceDB(client);
    // ----------------------------------------------------------//
    await adminDataAccessObject.injectAdminDB(client);
    await financeDataAccessObject.injectfinanceDB(client);
    await clientsDataAccessObject.injectClientsRegDB(client);
    await clientsDataAccessObject.injectClients(client);
    // ===================================================================
    //   INVENTORY MANAGEMENT INJECTIONS
    // ===================================================================
    await inventoryDataAccessObject.injectProductDB(client);
    await inventoryDataAccessObject.injectProductDB(client);
    await inventoryDataAccessObject.injectSales(client);
    await inventoryDataAccessObject.injectScanEvent(client);
    await inventoryDataAccessObject.injectDrafts(client);
    await inventoryDataAccessObject.injectSoledItems(client);
    await inventoryDataAccessObject.injectExpenses(client);
    await inventoryDataAccessObject.injectQuotation(client);
    await inventoryDataAccessObject.injectSubscription(client);
    await inventoryDataAccessObject.injectSellReturn(client);
    await inventoryDataAccessObject.injectProductServices(client);
    await inventoryDataAccessObject.injectImports(client);
    await inventoryDataAccessObject.injectPricegroups(client);
    await inventoryDataAccessObject.injectUnits(client);
    await inventoryDataAccessObject.injectProductsCategories(client);
    await inventoryDataAccessObject.injectTaxrate(client);
    await inventoryDataAccessObject.injectRecieves(client);
    await inventoryDataAccessObject.injectReturns(client);
    await inventoryDataAccessObject.injectOrders(client);
    await inventoryDataAccessObject.injectDelivery(client);
    await inventoryDataAccessObject.injectOpeningStock(client);
    await inventoryDataAccessObject.injectInvoices(client);
    await inventoryDataAccessObject.injectPayments(client);
    await inventoryDataAccessObject.injectBillingEstimate(client);
    await inventoryDataAccessObject.injectProduction(client);
    await inventoryDataAccessObject.injectSupportChart(client);
    app.listen(port, () => {
      console.log(`Masha Allaah, software running on the port: ${port}`);
    });
  });
