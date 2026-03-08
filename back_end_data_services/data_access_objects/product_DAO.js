import { ObjectId } from "mongodb";

let productDB, sales;

export default class productDataAccess {
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

  static async addProduct(productData) {
    try {
      // ====== VALIDATION ======
      if (!productData.sku || !productData.barcode || !productData.name) {
        return {
          status: 400,
          message: "sku, barcode and name are required",
          info: null,
        };
      }

      // ====== INSERT ======
      const insertResult = await productDB.insertOne({
        ...productData,
        status: productData.status || "ACTIVE",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return {
        status: 201,
        message: "Product added successfully",
        info: insertResult,
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        message: "Error adding product",
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
  static async apiPostItemSold(sellings, _id, $payment_type) {
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
}
