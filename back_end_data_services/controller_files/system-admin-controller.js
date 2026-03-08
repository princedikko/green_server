import systemAdminDataAccessObject from "../data_access_objects/system-admin_DAO.js";

export default class systemAdminController {
  static async systemAdminLogin(req, res, next) {
    try {
      const systemAdminUsername = req.body.user_name;
      const systemAdminLoginPassword = req.body.systemAdmin_password;

      const response = await systemAdminDataAccessObject.systemAdminSignIn(
        systemAdminUsername,
        systemAdminLoginPassword
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

  static async apiRegSystemAdmin(req, res, next) {
    try {
      const id = req.params.id;
      const sysAdminData = req.body;

      const response = await systemAdminDataAccessObject.regSysAdmin(
        id,
        sysAdminData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegHeadMaster(req, res, next) {
    try {
      const id = req.params.id;
      const headMasterData = req.body;

      const response = await systemAdminDataAccessObject.regHeadMaster(
        id,
        headMasterData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegAdminStaff(req, res, next) {
    try {
      const id = req.params.id;
      const adminStaffData = req.body;
      const response = await systemAdminDataAccessObject.regAdminStaff(
        id,
        adminStaffData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegTeacher(req, res, next) {
    try {
      const id = req.params.id;
      const teacherData = req.body;

      const response = await systemAdminDataAccessObject.regTeacher(
        id,
        teacherData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegParent(req, res, next) {
    try {
      const id = req.params.id;
      const parentData = req.body;

      const response = await systemAdminDataAccessObject.regParent(
        id,
        parentData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegFinance(req, res, next) {
    try {
      const id = req.params.id;
      const financeData = req.body;

      const response = await systemAdminDataAccessObject.regFinance(
        id,
        financeData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegLiberian(req, res, next) {
    try {
      const id = req.params.id;
      const liberianData = req.body;

      const response = await systemAdminDataAccessObject.regLiberian(
        id,
        liberianData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegTransport(req, res, next) {
    try {
      const id = req.params.id;
      const transportData = req.body;

      const response = await systemAdminDataAccessObject.regTransport(
        id,
        transportData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegCounsellor(req, res, next) {
    try {
      const id = req.params.id;
      const cousellorData = req.body;

      const response = await systemAdminDataAccessObject.regCounsellor(
        id,
        cousellorData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async apiRegSecurity(req, res, next) {
    try {
      const id = req.params.id;
      const securityData = req.body;

      const response = await systemAdminDataAccessObject.regSecurity(
        id,
        securityData
      );

      // const sendmail = await sendNotification.sendEmail(
      //   firstName,
      //   surName,
      //   otherName,
      //   application_number,
      //   programme,
      //   refNumber,
      //   transactionId,
      //   email_address
      // );
      res.status(200).json({
        status: response.status,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
