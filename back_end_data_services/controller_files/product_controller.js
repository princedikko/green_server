import productDataAccess from "../data_access_objects/product_DAO.js";
import { ObjectId } from "mongodb";

export default class productController {
  static async addProduct(req, res, next) {
    try {
      const productData = req.body;

      const response = await productDataAccess.addProduct(productData);

      res.json({
        status: response.status,
        message: response.message,
        info: response.info,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 500, message: "Server error" });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await productDataAccess.getAllProducts();

      res.json({
        status: 200,
        message: "Products fetched successfully",
        info: products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 500,
        message: "Server error",
      });
    }
  }

  static async apiPostSold(req, res, next) {
    try {
      const sellings = req.body;
      const _id = req.params.id;
      const $payment_type = req.params.payment_type;

      const response = await productDataAccess.apiPostItemSold(
        sellings,
        _id,
        $payment_type,
      );
      res.json({
        status: response.status,
        message: response.message,
        info: response.found,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
