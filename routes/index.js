const express = require("express");
const path = require("path");
const {
  getInsuranceBanks,
  userDetailDataReg,
  frontlogin,

  deleteuser,
  getConsultations,
  createConsultation,
  bankdetails,
  // registerfrontendData,
  getCompanyProfileSelect,
  FetchPersonalUserdetailsecondPage,
  getSecurityFeeDataWithStatusOnebyid,
  editInsuramcetype,
  PackageDataController,
  frontloginform,
  BankDetailsadd,

  FetchPersonalUserdetails,
  CompanyProfileScn,
  getSecurityFeeDataWithStatusOneFront,
  // AddAdmin,
  // GetAdminUser,
  // UpdateAdmin,
  updateCompanyProfile,
  getSecurityFeeDataWithStatusZero,
  personalDetailsOfUser,
  updateloantypefile,

  getSecurityFeeDataWithStatusOne,
  stepfourdetails,
  forgotpasswordfront,

  // getSecurityFeeDataWithStatusTwo,
  step1Details,
  frontsubmitForm,
  deleteloan,
  deletebank,
  processFeeData,

  LoanTypes,

  updatePackage,
  fetchCompanyProfile,

  changePassword,
  loginNumber,
  GetLoanTypes,
  FetchPackageDataController,

  DeletePackage,
  // ChangeAdminPassword,
  // UploadImgMulter,
  // DeleteAdminImg,
  EditName,
  // getProcessingFeeDataWithStatusTwo,
  changePasswordfirst,
  login,
  ChangeAdminPassword,
  register,
  UpdateCompanyProfileSelect
} = require("../controller/User/UserLofinController");
const { default: axios } = require("axios");
const multer = require("multer");
const authMiddleware = require("./authMiddleware");
const router = express.Router();

router.get("/home", authMiddleware, (req, res) => {
  res.render("index", { title: "Dashboard", currentRoute: req.url });
});

router.get("/admin_role", authMiddleware, (req, res) => {
  res.render("admin_role", { title: "Admin Role", currentRoute: req.url });
});
router.get("/player", authMiddleware, async (req, res) => {
  const { page = 1 } = req.query; // Get 'page' from query params, default to 1
  const limit = 10; // Number of users per page

  try {
    const profileResponse = await fetch(
      `https://selectsphere.in/back/getConsultations`
    );
    // Check if the response is JSON
    const contentType = profileResponse.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Received non-JSON response");
    }
    const profile = await profileResponse.json();
    console.log(profile, "getConsultations");

    res.render("player", {
      profile: profile, // Pass the actual data array to the view
      title: "Player Master",
      currentRoute: req.url
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
});

router.post("/login", login);

// Route to fetch user data and render the user page
router.get("/user/:userId", authMiddleware, async (req, res) => {
  try {
    const userId = req.params.userId;
    // console.log(userId);
    const apiResponse = await fetch(
      `https://selectsphere.in/back/personalDetailsOfUser/${userId}`
    );

    if (!apiResponse.ok) {
      throw new Error(`Server responded with ${apiResponse}`);
    }

    const userData = await apiResponse.json();
    // console.log(userData, "userData");
    if (!userData || userData.error) {
      res.render("user", {
        title: "User Details",
        currentRoute: req.url,
        user: null,
        error: "User not found"
      });
    } else {
      res.render("user", {
        title: "User Details",
        currentRoute: req.url,
        user: userData,
        error: null
      });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.render("errorPage", {
      error: "An error occurred while fetching user data."
    });
  }
});

router.get("/users-profile", authMiddleware, (req, res) => {
  res.render("users-profile", {
    title: "Users Profile",
    currentRoute: req.url
  });
});
router.get("/chatbox", authMiddleware, (req, res) => {
  res.render("chatbox", { title: "chatbox", currentRoute: req.url });
});

router.get("/pages-login", authMiddleware, (req, res) => {
  res.render("pages-login", { title: "pages-login", currentRoute: req.url });
});

router.get("/pages-register", authMiddleware, (req, res) => {
  res.render("pages-register", {
    title: "pages-register",
    currentRoute: req.url
  });
});

router.get("/pages-contact", (req, res) => {
  res.render("pages-contact", { title: "Bonus", currentRoute: req.url });
});
router.get("/Bonus", authMiddleware, async (req, res) => {
  try {
    // Fetch Loan Types data
    const loanResponse = await axios.get(
      "https://selectsphere.in/back/GetLoanTypes"
    );

    // Fetch Insurance Banks data
    const insuranceResponse = await axios.get(
      "https://selectsphere.in/back/getInsuranceBanks"
    );

    // Get data from both responses
    const loanData = loanResponse.data;
    const insuranceData = insuranceResponse.data;

    // Render the view with the fetched data
    res.render("bonus", {
      title: "Bonus",
      currentRoute: req.url,
      GetLoanTypes: loanData.length > 0 ? loanData : [], // Loan Types data
      getInsuranceBanks: insuranceData.length > 0 ? insuranceData : [] // Insurance Banks data
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.render("bonus", {
      title: "Bonus",
      currentRoute: req.url,
      GetLoanTypes: [], // Pass empty array if there's an error
      getInsuranceBanks: [] // Pass empty array if there's an error
    });
  }
});

router.post("/LoanTypes", LoanTypes);
router.delete("/deleteloan/:id", deleteloan);
router.delete("/deletebank/:id", deletebank);
router.get("/GetLoanTypes", GetLoanTypes);
router.get("/Refer", async (req, res) => {
  try {
    const response = await axios.get(
      "https://selectsphere.in/back/FetchPackageDataController"
    ); // Replace with your API endpoint
    const data = response.data;

    res.render("refer", {
      title: "Approval",
      currentRoute: req.url,
      packageData: data // Passing data to the view
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.render("error", { error: "Failed to fetch data from API" });
  }
});

router.get("/rech_pe", authMiddleware, async (req, res) => {
  try {
    const profileResponse = await fetch(
      "https://selectsphere.in/back/getCompanyProfileSelect"
    );
    const profileData = await profileResponse.json();

    res.render("rech_pe", {
      profile: profileData.profile, // Access the `profile` key inside the data
      currentRoute: "/rech_pe"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage");
  }
});

// router.post("/update-otp", updateotp);
router.post("/logout", (req, res) => {
  res.clearCookie("token"); // Clear the authentication cookie
  window.reload();
  res.json({ message: "Logged out successfully" });
});
router.post("/loginNumber", loginNumber);

// Set up multer for file handling

router.get("/sec_re", async (req, res) => {
  try {
    const profileResponse = await fetch(
      "https://selectsphere.in/back/getSecurityFeeDataWithStatusZero"
    );
    const profile = await profileResponse.json();
    res.render("security_req", {
      profile,
      currentRoute: "/back/sec_re"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
  // res.render("with_re", { title: "with_re", currentRoute: req.url });
});

router.get("/sec_app", async (req, res) => {
  try {
    const profileResponse = await fetch(
      "https://selectsphere.in/back/getSecurityFeeDataWithStatusOne"
    );
    const profile = await profileResponse.json();
    // console.log(profile, "profile  1");
    res.render("security_app", {
      profile,
      currentRoute: "/back/sec_app"
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.render("errorPage"); // Handle error appropriately
  }
  // res.render("with_re", { title: "with_re", currentRoute: req.url });
});

// router.get("/sec_rej", async (req, res) => {
//   try {
//     const profileResponse = await fetch(
//       "https://selectsphere.in/back/getSecurityFeeDataWithStatusTwo"
//     );
//     const profile = await profileResponse.json();
//     // console.log(profile, "profile  2");
//     res.render("security_rej", {
//       profile,
//       currentRoute: "/back/sec_rej"
//     });
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//     res.render("errorPage"); // Handle error appropriately
//   }
//   // res.render("with_re", { title: "with_re", currentRoute: req.url });
// });

router.post("/step1Details", step1Details);
router.post("/editname", EditName);
router.post("/stepfourdetails", stepfourdetails);
router.put("/updatePackage/:id", updatePackage);
// ("");
router.get("/FetchPackageDataController", FetchPackageDataController);
router.post("/PackageDataController", PackageDataController);
router.get("/fetchCompanyProfile", fetchCompanyProfile);

router.get("/CompanyProfileScn", CompanyProfileScn);
router.get("/getSecurityFeeDataWithStatusOne", getSecurityFeeDataWithStatusOne);
router.get(
  "/getSecurityFeeDataWithStatusOneFront/:userId",
  getSecurityFeeDataWithStatusOneFront
);
// router.get("/getSecurityFeeDataWithStatusTwo", getSecurityFeeDataWithStatusTwo);
router.get(
  "/getSecurityFeeDataWithStatusZero",
  getSecurityFeeDataWithStatusZero
);
router.post("/bankdetails", bankdetails);
router.post("/changePasswordfirst", changePasswordfirst);
router.post("/ChangeAdminPassword", ChangeAdminPassword);
// router.post("/UpdateCompanyProfile", UpdateCompanyProfile);

router.get("/personalDetailsOfUser/:userId", personalDetailsOfUser);
router.get("/FetchPersonalUserdetails/:userId", FetchPersonalUserdetails);
router.get(
  "/FetchPersonalUserdetailsecondPage/:userId",
  FetchPersonalUserdetailsecondPage
);

// Route to update company profile
router.post("/frontloginform", frontloginform);
router.delete("/deleteuser/:Id", deleteuser);
router.post("/register", register);
router.post("/frontlogin", frontlogin);
router.post("/forgot-password-front", forgotpasswordfront);
router.get("/getInsuranceBanks", getInsuranceBanks);

// Define the route for form submission

// Set storage engine to save files on disk

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});
router.post("/BankDetailsadd", upload.single("imageadd"), BankDetailsadd);

// Edit insurance type route (no file upload needed)
router.post(
  "/editInsuramcetype/:id",
  upload.single("image"),
  editInsuramcetype
);

router.post(
  "/frontsubmitForm",
  upload.fields([
    { name: "profilePhotoUpload", maxCount: 1 },
    { name: "adharcardFront", maxCount: 1 },
    { name: "adharcardBack", maxCount: 1 },
    { name: "pancardPhoto", maxCount: 1 },
    { name: "capturedPhoto", maxCount: 1 }
  ]),
  frontsubmitForm
);
router.post("/updateloantypefile", updateloantypefile);
// Apply the middleware to the route
const uploadMiddleware = upload.fields([
  { name: "paymentQRCharges1", maxCount: 1 },
  { name: "paymentQRCharges2", maxCount: 1 },
  { name: "Signature", maxCount: 1 },
  {
    name: "logo",
    maxCount: 1
  }
]);
// const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/UpdateCompanyProfile", uploadMiddleware, updateCompanyProfile);
router.get("/userDetailDataReg", userDetailDataReg);
router.get("/getCompanyProfileSelect", getCompanyProfileSelect);
router.post("/UpdateCompanyProfileSelect", UpdateCompanyProfileSelect);
router.get("/getConsultations", getConsultations);
router.post("/createConsultation", upload.single("resume"), createConsultation);
// router.post("/checkPan", pancardDetailData);
module.exports = router;
