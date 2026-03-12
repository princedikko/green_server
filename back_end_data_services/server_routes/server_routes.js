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
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                           Inventory Routers functions
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
router
  .route("/client/:id/products/add_product")
  .post(inventoryController.addProduct);
router
  .route("/client/:id/products/fetch_product")
  .get(inventoryController.getAllProducts);

router
  .route("/warehouse/selling/:id/submit_sale/:payment_type")
  .post(inventoryController.apiPostSold);

router.route("/products/:id").post(inventoryController.apiPostProductDB);
router.route("/sales/:id/:payment_type?").post(inventoryController.apiPostSold);
router.route("/scan-events/:id").post(inventoryController.apiPostScanEvent);
router.route("/drafts/:id").post(inventoryController.apiPostDraft);
router.route("/soled-items/:id").post(inventoryController.apiPostSoledItems);
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

router
  .route("/warehouse/selling/:id/submit_sale/:payment_type")
  .get(inventoryController.apiGetSold);

router.route("/products/:id").get(inventoryController.apiGetProductDB);
router.route("/sales/:id/:payment_type?").get(inventoryController.apiGetSold);
router.route("/scan-events/:id").get(inventoryController.apiGetScanEvent);
router.route("/drafts/:id").get(inventoryController.apiGetDraft);
router.route("/soled-items/:id").get(inventoryController.apiGetSoledItems);
router.route("/expenses/:id").get(inventoryController.apiGetExpense);
router.route("/quotations/:id").get(inventoryController.apiGetQuotation);
router.route("/subscriptions/:id").get(inventoryController.apiGetSubscription);
router.route("/sell-returns/:id").get(inventoryController.apiGetSellReturn);
router
  .route("/product-services/:id")
  .get(inventoryController.apiGetProductService);
router.route("/imports/:id").get(inventoryController.apiGetImport);
router.route("/price-groups/:id").get(inventoryController.apiGetPricegroup);
router.route("/units/:id").get(inventoryController.apiGetUnit);
router.route("/categories/:id").get(inventoryController.apiGetCategory);
router.route("/tax-rates/:id").get(inventoryController.apiGetTaxrate);
router.route("/receives/:id").get(inventoryController.apiGetRecieve);
router.route("/returns/:id").get(inventoryController.apiGetReturn);
router.route("/orders/:id").get(inventoryController.apiGetOrder);
router.route("/deliveries/:id").get(inventoryController.apiGetDelivery);
router.route("/opening-stock/:id").get(inventoryController.apiGetOpeningStock);
router.route("/invoices/:id").get(inventoryController.apiGetInvoices);
router.route("/payments/:id").get(inventoryController.apiGetPayments);
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
