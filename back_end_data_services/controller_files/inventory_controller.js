import inventoryDataAccessObject from "../data_access_objects/inventory_DAO.js";
import { ObjectId } from "mongodb";

export default class inventoryController {
  static async addProduct(req, res, next) {
    try {
      const productData = req.body;

      const response = await inventoryDataAccessObject.addProduct(productData);

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
      const products = await inventoryDataAccessObject.getAllProducts();

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

      const response = await inventoryDataAccessObject.apiPostItemSold(
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

  static async apiPostProductDB(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostProductDB(
        data,
        _id,
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

  static async apiPostSold(req, res, next) {
    try {
      const sellings = req.body;
      const _id = req.params.id;
      const $payment_type = req.params.payment_type;

      const response = await inventoryDataAccessObject.apiPostItemSold(
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

  static async apiPostScanEvent(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostScanEvent(
        data,
        _id,
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

  static async apiPostDraft(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostDraft(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.found,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostSoledItems(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostSoledItems(
        data,
        _id,
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

  static async apiPostExpense(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostExpense(
        data,
        _id,
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

  static async apiPostQuotation(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostQuotation(
        data,
        _id,
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

  static async apiPostSubscription(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostSubscription(
        data,
        _id,
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

  static async apiPostSellReturn(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostSellReturn(
        data,
        _id,
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

  static async apiPostProductService(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostProductService(
        data,
        _id,
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

  static async apiPostImport(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostImport(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.found,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostPricegroup(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostPricegroup(
        data,
        _id,
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

  static async apiPostUnit(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostUnit(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.found,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostCategory(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostCategory(
        data,
        _id,
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

  static async apiPostTaxrate(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostTaxrate(
        data,
        _id,
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

  static async apiPostRecieve(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostRecieve(
        data,
        _id,
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

  static async apiPostReturn(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostReturn(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.found,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostOrder(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostOrder(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.found,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostDelivery(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostDelivery(
        data,
        _id,
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

  static async apiPostOpeningStock(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostOpeningStock(
        data,
        _id,
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

  static async apiPostInvoices(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostInvoice(
        data,
        _id,
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

  static async apiPostPayments(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostPayment(
        data,
        _id,
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

  static async apiPostBillingEstimate(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostBillingEstimate(
        data,
        _id,
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

  static async apiPostProduction(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostProduction(
        data,
        _id,
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

  static async apiPostSupportChart(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.apiPostSupportChart(
        data,
        _id,
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
