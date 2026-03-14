import inventoryDataAccessObject from "../data_access_objects/inventory_DAO.js";
import { ObjectId } from "mongodb";

export default class inventoryController {
  static async apiPostProducts(req, res, next) {
    try {
      const productData = req.body;

      const response =
        await inventoryDataAccessObject.postProducts(productData);

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

      const response = await inventoryDataAccessObject.postItemSold(
        sellings,
        _id,
        $payment_type,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostScanEvent(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postScanEvent(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostDraft(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postDraft(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiExecuteSales(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.executeSales(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostExpense(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postExpense(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostQuotation(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postQuotation(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostSubscription(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postSubscription(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostSellReturn(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postSellReturn(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostProductService(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postProductService(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostImport(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postImport(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostPricegroup(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postPricegroup(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostUnit(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postUnit(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostCategory(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postCategory(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostTaxrate(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postTaxrate(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostRecieve(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postRecieve(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostReturn(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postReturn(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostOrder(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postOrder(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostDelivery(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postDelivery(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostOpeningStock(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postOpeningStock(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostInvoices(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postInvoice(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostPayments(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postPayment(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostBillingEstimate(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postBillingEstimate(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostProduction(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postProduction(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiPostSupportChart(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.postSupportChart(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetSold(req, res, next) {
    try {
      const sellings = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getItemSold(
        sellings,
        _id,
      );
      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetProductDB(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getProductDB(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetScanEvent(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getScanEvent(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetDraft(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getDraft(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetSoledItems(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getSoledItems(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetExpense(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getExpense(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetQuotation(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getQuotation(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetSubscription(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getSubscription(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetSellReturn(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getSellReturn(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetProductService(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getProductService(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetImport(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getImport(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetPricegroup(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getPricegroup(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetUnit(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getUnit(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetCategory(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getCategory(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetTaxrate(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getTaxrate(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetRecieve(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getRecieve(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetReturn(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getReturn(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetOrder(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getOrder(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetDelivery(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getDelivery(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetOpeningStock(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getOpeningStock(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetInvoices(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getInvoice(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetPayments(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getPayment(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetBillingEstimate(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getBillingEstimate(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetProduction(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getProduction(data, _id);

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetSupportChart(req, res, next) {
    try {
      const data = req.body;
      const _id = req.params.id;

      const response = await inventoryDataAccessObject.getSupportChart(
        data,
        _id,
      );

      res.json({
        status: response.status,
        message: response.message,
        info: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
