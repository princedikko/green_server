import express from "express";
import multer from "multer";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                             importants Components
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import inventoryController from "../controller_files/inventory_controller.js";
import clientsController from "../controller_files/clients_controller.js";
import adminController from "../controller_files/admin_controller.js";
import financeController from "../controller_files/finance_controller.js";
import systemAdminController from "../controller_files/system-admin-controller.js";
import sendNotificationController from "../controller_files/notificationControllers.js";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@ END OF IMPORTANTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const router = express.Router();
// Define Multer storage (local or S3)
const storage = multer.memoryStorage(); // For S3 use
const upload = multer({ storage: multer.memoryStorage() });

// ********************** ROUTES FOR THE LOGIN PAGES **************************
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                           Client Routers functions
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

router.route("/clients/logins").post(clientsController.clientsLogin);
router.route("/users/logins").post(clientsController.userLogin);
// --------------------------------------------------------------------

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                           Inventory Routers functions
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ------------------------ API POST REQUESTS ---------------------------
router
  .route("/client/:id/products/add_product")
  .post(inventoryController.apiPostProducts);
router.route("/soled-items/:id").post(inventoryController.apiExecuteSales);
router
  .route("/warehouse/selling/:id/submit_sale/:payment_type")
  .post(inventoryController.apiPostSold);
router.route("/scan-events/:id").post(inventoryController.apiPostScanEvent);
router.route("/drafts/:id").post(inventoryController.apiPostDraft);
router.route("/expenses/:id").post(inventoryController.apiPostExpense);
router.route("/quotations/:id").post(inventoryController.apiPostQuotation);
router
  .route("/subscriptions/:id")
  .post(inventoryController.apiPostSubscription);
router.route("/sell-returns/:id").post(inventoryController.apiPostSellReturn);
router
  .route("/product-services/:id")
  .post(inventoryController.apiPostProductService);
router.route("/imports/:id").post(inventoryController.apiPostImport);
router.route("/price-groups/:id").post(inventoryController.apiPostPricegroup);
router.route("/units/:id").post(inventoryController.apiPostUnit);
router.route("/categories/:id").post(inventoryController.apiPostCategory);
router.route("/tax-rates/:id").post(inventoryController.apiPostTaxrate);
router.route("/receives/:id").post(inventoryController.apiPostRecieve);
router.route("/returns/:id").post(inventoryController.apiPostReturn);
router.route("/orders/:id").post(inventoryController.apiPostOrder);
router.route("/deliveries/:id").post(inventoryController.apiPostDelivery);
router
  .route("/opening-stock/:id")
  .post(inventoryController.apiPostOpeningStock);
router.route("/invoices/:id").post(inventoryController.apiPostInvoices);
router.route("/payments/:id").post(inventoryController.apiPostPayments);
router
  .route("/billing-estimates/:id")
  .post(inventoryController.apiPostBillingEstimate);
router.route("/production/:id").post(inventoryController.apiPostProduction);
router
  .route("/support-charts/:id")
  .post(inventoryController.apiPostSupportChart);

// ------------------------ API GET REQUESTS ---------------------------
router
  .route("/client/:id/products/fetch_product")
  .get(inventoryController.getAllProducts);
router
  .route("/inventory/client/:id/get_sales")
  .get(inventoryController.apiGetSold);

router
  .route("/inventory/client/:id/products")
  .get(inventoryController.apiGetProductDB);
router
  .route("/inventory/client/:id/sales/:id/:payment_?")
  .get(inventoryController.apiGetSold);
router
  .route("/inventory/client/:id/scan-events")
  .get(inventoryController.apiGetScanEvent);
router
  .route("/inventory/client/:id/drafts")
  .get(inventoryController.apiGetDraft);
router
  .route("/inventory/client/:id/soled-items")
  .get(inventoryController.apiGetSoledItems);
router
  .route("/inventory/client/:id/expenses")
  .get(inventoryController.apiGetExpense);
router
  .route("/inventory/client/:id/quotation")
  .get(inventoryController.apiGetQuotation);
router
  .route("/inventory/client/:id/subscriptions")
  .get(inventoryController.apiGetSubscription);
router
  .route("/inventory/client/:id/sell-returns")
  .get(inventoryController.apiGetSellReturn);
router
  .route("/inventory/client/:id/product-services")
  .get(inventoryController.apiGetProductService);
router
  .route("/inventory/client/:id/imports")
  .get(inventoryController.apiGetImport);
router
  .route("/inventory/client/:id/price-groups")
  .get(inventoryController.apiGetPricegroup);
router.route("/inventory/client/:id/units").get(inventoryController.apiGetUnit);
router
  .route("/inventory/client/:id/categories")
  .get(inventoryController.apiGetCategory);
router
  .route("/inventory/client/:id/tax-rates")
  .get(inventoryController.apiGetTaxrate);
router
  .route("/inventory/client/:id/receives")
  .get(inventoryController.apiGetRecieve);
router
  .route("/inventory/client/:id/returns")
  .get(inventoryController.apiGetReturn);
router
  .route("/inventory/client/:id/orders")
  .get(inventoryController.apiGetOrder);
router
  .route("/inventory/client/:id/deliveries")
  .get(inventoryController.apiGetDelivery);
router
  .route("/inventory/client/:id/opening-stock")
  .get(inventoryController.apiGetOpeningStock);
router
  .route("/inventory/client/:id/invoices")
  .get(inventoryController.apiGetInvoices);
router
  .route("/inventory/client/:id/payments")
  .get(inventoryController.apiGetPayments);
router
  .route("/billing-estimates/:id")
  .get(inventoryController.apiGetBillingEstimate);
router.route("/production/:id").get(inventoryController.apiGetProduction);
router.route("/support-charts/:id").get(inventoryController.apiGetSupportChart);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@ END OF ROUTER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
router
  .route("/system-administration/login")
  .post(systemAdminController.systemAdminLogin);
router.route("/finance-routes/login").post(financeController.financeLogin);
router.route("/admin_login").post(adminController.adminLogin);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@ END OF LOGIN ROUTES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

router.route("/fetch_admin_data").get(adminController.apiGetAdministrations);

// SMS AND EMAIL RESPONSE Routes________________________________________________
// SYSTEM ADMIN ROUTES************************************

router
  .route("/sys-admin/registration/:id/system_admin")
  .put(systemAdminController.apiRegSystemAdmin);
router
  .route("/sys-admin/registration/:id/head-master")
  .put(systemAdminController.apiRegHeadMaster);
router
  .route("/sys-admin/registration/:id/admin-staff")
  .put(systemAdminController.apiRegAdminStaff);
router
  .route("/sys-admin/registration/:id/teacher")
  .put(systemAdminController.apiRegTeacher);
router
  .route("/sys-admin/registration/:id/parent")
  .put(systemAdminController.apiRegParent);
router
  .route("/sys-admin/registration/:id/finance")
  .put(systemAdminController.apiRegFinance);
router
  .route("/sys-admin/registration/:id/library")
  .put(systemAdminController.apiRegLiberian);
router
  .route("/sys-admin/registration/:id/transport")
  .put(systemAdminController.apiRegTransport);
router
  .route("/sys-admin/registration/:id/guidance-counselling")
  .put(systemAdminController.apiRegCounsellor);
router
  .route("/sys-admin/registration/:id/security")
  .put(systemAdminController.apiRegSecurity);

// Admin Staff Routes________________________________________________
router.route("/admin_registration").post(adminController.adminRegistration);
export default router;
