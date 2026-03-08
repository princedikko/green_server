import express from "express";
import multer from "multer";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                             importants Components
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import productController from "../controller_files/product_controller.js";
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
//                            Clients Routers functions
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
router
  .route("/client/:id/products/add_product")
  .post(productController.addProduct);
router
  .route("/client/:id/products/fetch_product")
  .get(productController.getAllProducts);
router.route("/clients/logins").post(clientsController.clientsLogin);
router
  .route("/warehouse/selling/:id/submit_sale/:payment_type")
  .post(productController.apiPostSold);
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
