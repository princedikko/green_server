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
  .route("/client/:id/manage_products/add_product")
  .post(inventoryController.apiPostProducts);
router
  .route("/client/:id/account/production/post")
  .post(inventoryController.apiPostProduction);

router
  .route("/client/:id/contacts/:contact_id/add_contact")
  .post(inventoryController.apiPostContacts);
router
  .route("/client/:id/point_of_sales/payment/:payment_type")
  .post(inventoryController.apiExecuteSales);

router
  .route("/client/:id/point_of_sales/save_draft")
  .post(inventoryController.apiPostDraft);
router
  .route("/client/:id/inventory/discount/create")
  .post(inventoryController.apiPostDiscount);
router
  .route("/client/:id/point_of_sales/quotation")
  .post(inventoryController.apiPostQuotation);
router
  .route("/client/:id/point_of_sales/subscribe")
  .post(inventoryController.apiPostSubscription);

router
  .route("/client/:id/manage_products/price_groups/add_price_group")
  .post(inventoryController.apiPostPricegroup);
router
  .route("/client/:id/manage_products/create-unit")
  .post(inventoryController.apiPostUnit);
router
  .route("/client/:id/manage_products/create-brand")
  .post(inventoryController.apiPostUnit);
router
  .route("/client/:id/manage_products/create-category")
  .post(inventoryController.apiPostCategory);
router
  .route("/client/:id/manage_products/create-tax")
  .post(inventoryController.apiPostTaxrate);
router
  .route("/client/:id/manage_products/post-variation")
  .post(inventoryController.apiPostVariation);
router
  .route("/client/:id/manage_products/post-service")
  .post(inventoryController.apiPostProductService);
router
  .route("/client/:id/manage_products/post_import")
  .post(inventoryController.apiPostImport);
router
  .route("/client/:id/purchases/insert_recieve")
  .post(inventoryController.apiPostRecieve);
router
  .route("/client/:id/purchases/post_return")
  .post(inventoryController.apiPostReturn);
router
  .route("/client/:id/purchases/post_order")
  .post(inventoryController.apiPostOrder);

router
  .route("/client/:id/stock_management/execute_transfers")
  .post(inventoryController.apiPostTransfer);
router
  .route("/client/:id/stock_management/post_openingStock")
  .post(inventoryController.apiPostOpeningStock);
router
  .route("/client/:id/stock_management/stock-reconciliation")
  .post(inventoryController.apiPostStockReconciliation);
router
  .route("/client/:id/stock_management/stock-discripancy")
  .post(inventoryController.apiPostDiscrepancy);
router
  .route("/client/:id/stock_management/stock-adjustment")
  .post(inventoryController.apiPostAdjustment);

router
  .route("/client/:id/expenses/post")
  .post(inventoryController.apiPostExpense);
router
  .route("/client/:id/invoicing/post")
  .post(inventoryController.apiPostInvoices);

router
  .route("/client/:id/inventory/sellreturn/post")
  .post(inventoryController.apiPostSellReturn);
// ......................... SUPPORT GEOMETRIC ..........................
router.route("/deliveries/:id").post(inventoryController.apiPostDelivery);
router.route("/payments/:id").post(inventoryController.apiPostPayments);
router
  .route("/billing-estimates/:id")
  .post(inventoryController.apiPostBillingEstimate);
router
  .route("/support-charts/:id")
  .post(inventoryController.apiPostSupportChart);
router.route("/scan-events/:id").post(inventoryController.apiPostScanEvent);

// ------------------------ API GET REQUESTS ---------------------------
router
  .route("/manage_products/client/:id/products/fetch_product")
  .get(inventoryController.apiGetProductDB);
router
  .route("/inventory/client/:id/get_sold_items")
  .get(inventoryController.apiGetSold);
router
  .route("/client/:id/inventory/discount/fetch")
  .get(inventoryController.apiGetDiscount);
router
  .route("/inventory/client/:id/drafts")
  .get(inventoryController.apiGetDraft);
router
  .route("/inventory/client/:id/quotation")
  .get(inventoryController.apiGetQuotation);
router
  .route("/manage_products/client/:id/:brand/fetch_brands")
  .get(inventoryController.apiGetBrand);
// ........................ SUPPORT GEOMETRIC ..........................

router
  .route("/inventory/client/:id/sales/:id/:payment_?")
  .get(inventoryController.apiGetSold);
router
  .route("/inventory/client/:id/scan-events")
  .get(inventoryController.apiGetScanEvent);
router
  .route("/inventory/client/:id/soled-items")
  .get(inventoryController.apiGetSoledItems);
router
  .route("/inventory/client/:id/expenses")
  .get(inventoryController.apiGetExpense);
router
  .route("/inventory/client/:id/get_subscriptions")
  .get(inventoryController.apiGetSubscription);
router
  .route("/manage_products/client/:id/sell-returns")
  .get(inventoryController.apiGetSellReturn);
router
  .route("/inventory/client/:id/product-services")
  .get(inventoryController.apiGetProductService);
router
  .route("/manage_products/client/:id/imports")
  .get(inventoryController.apiGetImport);
router
  .route("/manage_products/client/:id/price_groups/get_price_groups")
  .get(inventoryController.apiGetPricegroup);
router
  .route("/manage_products/client/:id/units/get")
  .get(inventoryController.apiGetUnit);
router
  .route("/inventory/client/:id/categories")
  .get(inventoryController.apiGetCategory);
router
  .route("/manage_products/client/:id/tax-rates")
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
