import { ObjectId } from "mongodb";

let sysAdminColl,
  headMasterColl,
  adminStaffColl,
  teacherColl,
  parentColl,
  financeColl,
  liberianColl,
  transportColl,
  counsellorColl,
  securityColl,
  sysAdminApplication,
  headMasterApplication,
  adminStaffApplication,
  teacherApplication,
  parentApplication,
  financeApplication,
  liberianApplication,
  transportApplication,
  counsellorApplication,
  securityApplication;

export default class systemAdminDataAccessObject {
  // ******* STATICS FUNCTIONS FOR DATA BASE INJECTIONS ******
  static async injectsystemAdminDB(connections) {
    if (sysAdminColl) {
      return;
    }
    try {
      sysAdminColl = await connections
        .db("system_admin-data-base")
        .collection("system_admin-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the sysAdminColl data base and collections ${err}`
      );
    }
  }
  static async injectheadMasterDB(connections) {
    if (headMasterColl) {
      return;
    }
    try {
      headMasterColl = await connections
        .db("head_master-data-base")
        .collection("head-master-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Head Master data base and collections ${err}`
      );
    }
  }
  static async injectadminStaffDB(connections) {
    if (adminStaffColl) {
      return;
    }
    try {
      adminStaffColl = await connections
        .db("admin_staff-data-base")
        .collection("admin-staff-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Administrative Staff data base and collections ${err}`
      );
    }
  }
  static async injectteacherDB(connections) {
    if (teacherColl) {
      return;
    }
    try {
      teacherColl = await connections
        .db("teachers-data-base")
        .collection("teacher-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Teacher data base and collections ${err}`
      );
    }
  }
  static async injectparentDB(connections) {
    if (parentColl) {
      return;
    }
    try {
      parentColl = await connections
        .db("parent-data-base")
        .collection("parent-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Parents data base and collections ${err}`
      );
    }
  }
  static async injectfinanceDB(connections) {
    if (financeColl) {
      return;
    }
    try {
      financeColl = await connections
        .db("finance-data-base")
        .collection("finance-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Finance data base and collections ${err}`
      );
    }
  }
  static async injectliberianDB(connections) {
    if (liberianColl) {
      return;
    }
    try {
      liberianColl = await connections
        .db("liberian-data-base")
        .collection("liberian-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Liberians data base and collections ${err}`
      );
    }
  }
  static async injecttransportDB(connections) {
    if (transportColl) {
      return;
    }
    try {
      transportColl = await connections
        .db("transport-data-base")
        .collection("transport-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Transports  data base and collections ${err}`
      );
    }
  }
  static async injectcounsellorDB(connections) {
    if (counsellorColl) {
      return;
    }
    try {
      counsellorColl = await connections
        .db("cousellor-data-base")
        .collection("cousellor-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Cousellor data base and collections ${err}`
      );
    }
  }
  static async injectsecurityDB(connections) {
    if (securityColl) {
      return;
    }
    try {
      securityColl = await connections
        .db("security-data-base")
        .collection("security-informations");
    } catch (err) {
      console.log(
        `un-able to establish the connection to the Security data base and collections ${err}`
      );
    }
  }

  // ******* STATICS FUNCTIONS FOR ACCESSING DATA BASE COLLECTIONS ******

  static async systemAdminSignIn(
    systemAdminUsername,
    systemAdminLoginPassword
  ) {
    try {
      const found = await sysAdminColl.findOne({
        email: systemAdminUsername,
      });
      if (found) {
        if (systemAdminUsername == found.email) {
          if (found.auth.passwordHash == systemAdminLoginPassword) {
            return {
              status: 201,
              found: found,
              message: "Masha Allaah, Login was successfully",
            };
          } else {
            return {
              status: 401,
              found: null,
              message: "Incorrect password",
            };
          }
        }
      } else
        return {
          status: 401,
          found: null,
          message: "Username not found",
        };
    } catch (err) {
      console.log(err);
    }
  }
  // ******* SYS-ADMIN FUNCTIONS FOR REGISTRATIONS ******

  static async regSysAdmin(id, sysAdminData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await sysAdminColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await sysAdminApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await sysAdminColl.insertOne(sysAdminData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regHeadMaster(id, headMasterData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await headMasterColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await headMasterApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await headMasterColl.insertOne(headMasterData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regAdminStaff(id, adminStaffData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await adminStaffColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await adminStaffApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await adminStaffColl.insertOne(adminStaffData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regTeacher(id, teacherData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await teacherColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await teacherApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await teacherColl.insertOne(teacherData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regParent(id, parentData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await parentColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await parentApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await parentColl.insertOne(parentData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regFinance(id, financeData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await financeColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await financeApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await financeColl.insertOne(financeData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regLiberian(id, liberianData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await liberianColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await liberianApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await liberianColl.insertOne(liberianData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regTransport(id, transportData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await transportColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await transportApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await transportColl.insertOne(transportData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regCounsellor(id, cousellorData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await counsellorColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await counsellorApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await counsellorColl.insertOne(cousellorData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  static async regSecurity(id, securityData) {
    try {
      // CHECKING THE EXISTANCE OF THE STUDENT ADMISSION STATE
      const $existed = await securityColl.findOne({
        "academicInfo.studentID": adm_admission_number,
      });
      if ($existed) {
        return {
          status: 203,
          message: "The Sys-Admin you are trying to register already existed",
          data: null,
        };
      } else {
        const updateState = await securityApplication.findOneAndUpdate(
          {
            email: email_address,
          },
          { $set: { "admissions.acceptance_of_adm": "accepted" } },
          { new: true } // options: upsert and return new document
        );
        const { insertedId } = await securityColl.insertOne(securityData);
        const form = await students.findOne({
          _id: new ObjectId(insertedId),
        });
        if (form) {
          return {
            status: 200,
            message: "Sys Admin Registered Successfully",
            data: form,
          };
        } else {
          return {
            status: 404,
            message: "Sys-Admin record not found",
            data: form,
          };
        }
      }
      // _____________________________________
    } catch (err) {
      console.log("unable to establish connection to Sys-Admin DB: " + err);
    }
  }
  // ______________________________________________________________
}
