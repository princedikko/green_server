import { ObjectId } from "mongodb";

let productDB,
  sales,
  scanEvent,
  drafts,
  soledItems,
  expenses,
  quotation,
  subscription,
  sellreturn,
  productServices,
  imports,
  pricegroups,
  units,
  productsCategories,
  taxrate,
  recieves,
  returns,
  orders,
  delivery,
  opening_stock,
  invoices,
  payments,
  billingEstimate,
  production,
  support_chart;

export default class inventoryDataAccessObject {
  // -----------------------------------------------------------
  // DATA BASE INJECTION FUNCTIONS
  // -----------------------------------------------------------
  static async injectProductDB(connection) {
    if (productDB) return;
    try {
      productDB = await connection.db("products_store").collection("products");
    } catch (err) {
      console.log(`Unable to connect to products collection: ${err}`);
    }
  }
  static async injectSales(connections) {
    if (sales) {
      return;
    }
    try {
      sales = await connections
        .db("products_selling")
        .collection("sold_transaction");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Sold collections ${err}`,
      );
    }
  }

  static async injectScanEvent(connection) {
    if (scanEvent) return;
    try {
      scanEvent = await connection
        .db("products_selling")
        .collection("scan_events");
    } catch (err) {
      console.log(`Unable to connect to scan events collection: ${err}`);
    }
  }

  static async injectDrafts(connection) {
    if (drafts) return;
    try {
      drafts = await connection
        .db("products_selling")
        .collection("draft_transactions");
    } catch (err) {
      console.log(`Unable to connect to drafts collection: ${err}`);
    }
  }

  static async injectSoledItems(connection) {
    if (soledItems) return;
    try {
      soledItems = await connection
        .db("products_selling")
        .collection("sold_items");
    } catch (err) {
      console.log(`Unable to connect to sold items collection: ${err}`);
    }
  }

  static async injectExpenses(connection) {
    if (expenses) return;
    try {
      expenses = await connection.db("business_finance").collection("expenses");
    } catch (err) {
      console.log(`Unable to connect to expenses collection: ${err}`);
    }
  }

  static async injectQuotation(connection) {
    if (quotation) return;
    try {
      quotation = await connection
        .db("products_selling")
        .collection("quotations");
    } catch (err) {
      console.log(`Unable to connect to quotations collection: ${err}`);
    }
  }

  static async injectSubscription(connection) {
    if (subscription) return;
    try {
      subscription = await connection
        .db("business_finance")
        .collection("subscriptions");
    } catch (err) {
      console.log(`Unable to connect to subscriptions collection: ${err}`);
    }
  }

  static async injectSellReturn(connection) {
    if (sellreturn) return;
    try {
      sellreturn = await connection
        .db("products_selling")
        .collection("sell_returns");
    } catch (err) {
      console.log(`Unable to connect to sell return collection: ${err}`);
    }
  }

  static async injectProductServices(connection) {
    if (productServices) return;
    try {
      productServices = await connection
        .db("products_store")
        .collection("product_services");
    } catch (err) {
      console.log(`Unable to connect to product services collection: ${err}`);
    }
  }

  static async injectImports(connection) {
    if (imports) return;
    try {
      imports = await connection.db("products_store").collection("imports");
    } catch (err) {
      console.log(`Unable to connect to imports collection: ${err}`);
    }
  }

  static async injectPricegroups(connection) {
    if (pricegroups) return;
    try {
      pricegroups = await connection
        .db("products_store")
        .collection("price_groups");
    } catch (err) {
      console.log(`Unable to connect to price groups collection: ${err}`);
    }
  }

  static async injectUnits(connection) {
    if (units) return;
    try {
      units = await connection.db("products_store").collection("units");
    } catch (err) {
      console.log(`Unable to connect to units collection: ${err}`);
    }
  }

  static async injectProductsCategories(connection) {
    if (productsCategories) return;
    try {
      productsCategories = await connection
        .db("products_store")
        .collection("categories");
    } catch (err) {
      console.log(`Unable to connect to product categories collection: ${err}`);
    }
  }

  static async injectTaxrate(connection) {
    if (taxrate) return;
    try {
      taxrate = await connection.db("products_store").collection("tax_rates");
    } catch (err) {
      console.log(`Unable to connect to tax rates collection: ${err}`);
    }
  }

  static async injectRecieves(connection) {
    if (recieves) return;
    try {
      recieves = await connection
        .db("products_purchases")
        .collection("receives");
    } catch (err) {
      console.log(`Unable to connect to receives collection: ${err}`);
    }
  }

  static async injectReturns(connection) {
    if (returns) return;
    try {
      returns = await connection.db("products_purchases").collection("returns");
    } catch (err) {
      console.log(`Unable to connect to returns collection: ${err}`);
    }
  }

  static async injectOrders(connection) {
    if (orders) return;
    try {
      orders = await connection.db("products_purchases").collection("orders");
    } catch (err) {
      console.log(`Unable to connect to orders collection: ${err}`);
    }
  }

  static async injectDelivery(connection) {
    if (delivery) return;
    try {
      delivery = await connection
        .db("products_purchases")
        .collection("deliveries");
    } catch (err) {
      console.log(`Unable to connect to delivery collection: ${err}`);
    }
  }

  static async injectOpeningStock(connection) {
    if (opening_stock) return;
    try {
      opening_stock = await connection
        .db("products_store")
        .collection("opening_stock");
    } catch (err) {
      console.log(`Unable to connect to opening stock collection: ${err}`);
    }
  }

  static async injectInvoices(connection) {
    if (invoices) return;
    try {
      invoices = await connection.db("products_selling").collection("invoices");
    } catch (err) {
      console.log(`Unable to connect to invoices collection: ${err}`);
    }
  }

  static async injectPayments(connection) {
    if (payments) return;
    try {
      payments = await connection.db("business_finance").collection("payments");
    } catch (err) {
      console.log(`Unable to connect to payments collection: ${err}`);
    }
  }

  static async injectBillingEstimate(connection) {
    if (billingEstimate) return;
    try {
      billingEstimate = await connection
        .db("products_selling")
        .collection("billing_estimates");
    } catch (err) {
      console.log(`Unable to connect to billing estimates collection: ${err}`);
    }
  }

  static async injectProduction(connection) {
    if (production) return;
    try {
      production = await connection
        .db("products_store")
        .collection("production");
    } catch (err) {
      console.log(`Unable to connect to production collection: ${err}`);
    }
  }

  static async injectSupportChart(connection) {
    if (support_chart) return;
    try {
      support_chart = await connection
        .db("company_support")
        .collection("support_chart");
    } catch (err) {
      console.log(`Unable to connect to support chart collection: ${err}`);
    }
  }

  // --------------------------------------------------------------------

  // **********************************************************
  //  CALL FUNCTIONS
  // **********************************************************
  static async postProducts(productData) {
    try {
      const { insertedId } = await productDB.insertOne({
        ...productData,
        status: productData.status || "ACTIVE",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const insertResult = await productDB.find({});

      if (insertResult) {
        return {
          status: 201,
          message: "Product added successfully",
          info: insertResult,
        };
      } else {
        return {
          status: 400,
          message: "Product adding failed",
          info: null,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        message: err + "Error adding product",
        info: null,
      };
    }
  }
  static async getAllProducts() {
    try {
      return await productDB.find({ status: "ACTIVE" }).toArray();
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  static async executeSales(sellings, _id, $payment_type) {
    try {
      const $existed = await sales.findOne({
        saleId: _id,
      });
      if ($existed) {
        return {
          status: 203,
          message: "Sales already submitted, do you want to resubmit?",
          data: null,
        };
      } else {
        const { insertedId } = await sales.insertOne(sellings);
        // Retrieve the newly inserted document
        const data = await sales.findOne({
          _id: new ObjectId(insertedId),
        });
        return {
          status: 201,
          message: "Sales Submitted successfully",
          data: data,
        };
      }
    } catch (error) {
      console.log(`selling fails ${error}`);
      return error;
    }
  }

  static async postScanEvent(data, _id) {
    try {
      const $existed = await scanEvent.findOne({ scanId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Scan event already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await scanEvent.insertOne(data);

        const result = await scanEvent.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Scan event submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`scan event failed ${error}`);
      return error;
    }
  }

  static async postDraft(data, _id) {
    try {
      const $existed = await drafts.findOne({ draftId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Draft already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await drafts.insertOne(data);

        const result = await drafts.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Draft submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`draft failed ${error}`);
      return error;
    }
  }

  static async postExpense(data, _id) {
    try {
      const $existed = await expenses.findOne({ expenseId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Expense already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await expenses.insertOne(data);

        const result = await expenses.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Expense submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`expense failed ${error}`);
      return error;
    }
  }

  static async postQuotation(data, _id) {
    try {
      const $existed = await quotation.findOne({ quotationId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Quotation already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await quotation.insertOne(data);

        const result = await quotation.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Quotation submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`quotation failed ${error}`);
      return error;
    }
  }

  static async postSellReturn(data, _id) {
    try {
      const $existed = await sellreturn.findOne({ returnId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Sell return already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await sellreturn.insertOne(data);

        const result = await sellreturn.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Sell return submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`sell return failed ${error}`);
      return error;
    }
  }

  static async postProductService(data, _id) {
    try {
      const $existed = await productServices.findOne({ serviceId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Service already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await productServices.insertOne(data);

        const result = await productServices.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Service submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`service failed ${error}`);
      return error;
    }
  }

  static async postImport(data, _id) {
    try {
      const $existed = await imports.findOne({ importId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Import already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await imports.insertOne(data);

        const result = await imports.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Import submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`import failed ${error}`);
      return error;
    }
  }

  static async postOrder(data, _id) {
    try {
      const $existed = await orders.findOne({ orderId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Order already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await orders.insertOne(data);

        const result = await orders.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Order submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`order failed ${error}`);
      return error;
    }
  }

  static async postInvoice(data, _id) {
    try {
      const $existed = await invoices.findOne({ invoiceId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Invoice already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await invoices.insertOne(data);

        const result = await invoices.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Invoice submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`invoice failed ${error}`);
      return error;
    }
  }

  static async postPayment(data, _id) {
    try {
      const $existed = await payments.findOne({ paymentId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Payment already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await payments.insertOne(data);

        const result = await payments.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Payment submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`payment failed ${error}`);
      return error;
    }
  }

  static async postSubscription(data, _id) {
    try {
      const $existed = await subscription.findOne({ subscriptionId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Subscription already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await subscription.insertOne(data);

        const result = await subscription.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Subscription submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`subscription failed ${error}`);
      return error;
    }
  }

  static async postPricegroup(data, _id) {
    try {
      const $existed = await pricegroups.findOne({ pricegroupId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Price group already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await pricegroups.insertOne(data);

        const result = await pricegroups.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Price group submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`price group failed ${error}`);
      return error;
    }
  }

  static async postUnit(data, _id) {
    try {
      const $existed = await units.findOne({ unitId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Unit already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await units.insertOne(data);

        const result = await units.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Unit submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`unit failed ${error}`);
      return error;
    }
  }

  static async postCategory(data, _id) {
    try {
      const $existed = await productsCategories.findOne({ categoryId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Category already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await productsCategories.insertOne(data);

        const result = await productsCategories.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Category submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`category failed ${error}`);
      return error;
    }
  }

  static async postTaxrate(data, _id) {
    try {
      const $existed = await taxrate.findOne({ taxrateId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Tax rate already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await taxrate.insertOne(data);

        const result = await taxrate.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Tax rate submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`tax rate failed ${error}`);
      return error;
    }
  }

  static async postRecieve(data, _id) {
    try {
      const $existed = await recieves.findOne({ recieveId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Recieve already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await recieves.insertOne(data);

        const result = await recieves.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Recieve submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`recieve failed ${error}`);
      return error;
    }
  }

  static async postReturn(data, _id) {
    try {
      const $existed = await returns.findOne({ returnId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Return already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await returns.insertOne(data);

        const result = await returns.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Return submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`return failed ${error}`);
      return error;
    }
  }

  static async postDelivery(data, _id) {
    try {
      const $existed = await delivery.findOne({ deliveryId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Delivery already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await delivery.insertOne(data);

        const result = await delivery.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Delivery submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`delivery failed ${error}`);
      return error;
    }
  }

  static async postOpeningStock(data, _id) {
    try {
      const $existed = await opening_stock.findOne({ openingStockId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Opening stock already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await opening_stock.insertOne(data);

        const result = await opening_stock.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Opening stock submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`opening stock failed ${error}`);
      return error;
    }
  }

  static async postBillingEstimate(data, _id) {
    try {
      const $existed = await billingEstimate.findOne({ estimateId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Estimate already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await billingEstimate.insertOne(data);

        const result = await billingEstimate.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Estimate submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`estimate failed ${error}`);
      return error;
    }
  }

  static async postProduction(data, _id) {
    try {
      const $existed = await production.findOne({ productionId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Production already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await production.insertOne(data);

        const result = await production.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Production submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`production failed ${error}`);
      return error;
    }
  }

  static async postSupportChart(data, _id) {
    try {
      const $existed = await support_chart.findOne({ chartId: _id });

      if ($existed) {
        return {
          status: 203,
          message: "Support chart already submitted",
          data: null,
        };
      } else {
        const { insertedId } = await support_chart.insertOne(data);

        const result = await support_chart.findOne({
          _id: new ObjectId(insertedId),
        });

        return {
          status: 201,
          message: "Support chart submitted successfully",
          data: result,
        };
      }
    } catch (error) {
      console.log(`support chart failed ${error}`);
      return error;
    }
  }

  static async getItemSold(sellings, _id) {
    try {
      const data = await sales.find({}).toArray();
      if (data) {
        return {
          status: 201,
          message: "Sales found successfully",
          data: data,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`selling fails ${error}`);
      return error;
    }
  }
  static async getScanEvent() {
    try {
      const result = await scanEvent.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Scan event found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`scan event failed ${error}`);
      return error;
    }
  }

  static async getDraft() {
    try {
      const result = await drafts.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Draft found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`draft failed ${error}`);
      return error;
    }
  }

  static async getExpense() {
    try {
      const result = await expenses.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Expense found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`expense failed ${error}`);
      return error;
    }
  }

  static async getQuotation() {
    try {
      const result = await quotation.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Quotation found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`quotation failed ${error}`);
      return error;
    }
  }

  static async getSellReturn() {
    try {
      const result = await sellreturn.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Sell return found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`sell return failed ${error}`);
      return error;
    }
  }

  static async getProductService() {
    try {
      const result = await productServices.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Service found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`service failed ${error}`);
      return error;
    }
  }

  static async getImport() {
    try {
      const result = await imports.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Import found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`import failed ${error}`);
      return error;
    }
  }

  static async getOrder() {
    try {
      const result = await orders.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Order found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`order failed ${error}`);
      return error;
    }
  }

  static async getInvoice() {
    try {
      const result = await invoices.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Invoice found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`invoice failed ${error}`);
      return error;
    }
  }

  static async getPayment() {
    try {
      const result = await payments.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Payment found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`payment failed ${error}`);
      return error;
    }
  }

  static async getSubscription() {
    try {
      const result = await subscription.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Subscription found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`subscription failed ${error}`);
      return error;
    }
  }

  static async getPricegroup() {
    try {
      const result = await pricegroups.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Price group found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`price group failed ${error}`);
      return error;
    }
  }

  static async getUnit() {
    try {
      const result = await units.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Unit found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`unit failed ${error}`);
      return error;
    }
  }

  static async getCategory() {
    try {
      const result = await productsCategories.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Category found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`category failed ${error}`);
      return error;
    }
  }

  static async getTaxrate() {
    try {
      const result = await taxrate.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Tax rate found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`tax rate failed ${error}`);
      return error;
    }
  }

  static async getRecieve() {
    try {
      const result = await recieves.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Recieve found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`recieve failed ${error}`);
      return error;
    }
  }

  static async getReturn() {
    try {
      const result = await returns.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Return found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`return failed ${error}`);
      return error;
    }
  }

  static async getDelivery() {
    try {
      const result = await delivery.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Delivery found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`delivery failed ${error}`);
      return error;
    }
  }

  static async getOpeningStock() {
    try {
      const result = await opening_stock.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Opening stock found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`opening stock failed ${error}`);
      return error;
    }
  }

  static async getBillingEstimate() {
    try {
      const result = await billingEstimate.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Estimate found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`estimate failed ${error}`);
      return error;
    }
  }

  static async getProduction() {
    try {
      const result = await production.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Production found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`production failed ${error}`);
      return error;
    }
  }

  static async getSupportChart() {
    try {
      const result = await support_chart.find({}).toArray();

      if (result) {
        return {
          status: 201,
          message: "Support chart found successfully",
          data: result,
        };
      } else {
        return {
          status: 401,
          message: "Nothing found",
          data: null,
        };
      }
    } catch (error) {
      console.log(`support chart failed ${error}`);
      return error;
    }
  }
}
