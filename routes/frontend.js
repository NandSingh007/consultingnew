// const express = require("express");
// const router = express.Router();
// const path = require("path");

// const authMiddleware = (req, res, next) => {
//   // Your authentication logic here
//   next();
// };

// router.get("/", authMiddleware, (req, res) => {
//   res.render("Frontend/HomePage", {
//     title: "home",
//     currentRoute: req.url
//   });
// });
// router.get("/Reg", authMiddleware, (req, res) => {
//   res.render("Frontend/Register", {
//     title: "home",
//     currentRoute: req.url
//   });
// });
// router.get("/emi", authMiddleware, (req, res) => {
//   res.render("Frontend/Emi", {
//     title: "home",
//     currentRoute: req.url
//   });
// });
// router.get("/emi2", authMiddleware, (req, res) => {
//   res.render("Frontend/emi3", {
//     title: "home",
//     currentRoute: req.url
//   });
// });
// router.get("/Service", authMiddleware, (req, res) => {
//   res.render("Frontend/Service", {
//     title: "home",
//     currentRoute: req.url
//   });
// });
// router.get("/emi3", authMiddleware, (req, res) => {
//   res.render("Frontend/emi3", {
//     title: "home",
//     currentRoute: req.url
//   });
// });

// router.get("/Other", authMiddleware, (req, res) => {
//   res.render("Frontend/OtherForm", {
//     title: "home",
//     currentRoute: req.url
//   });
// });
// router.get("/sans", authMiddleware, (req, res) => {
//   res.render("Frontend/sansction", {
//     title: "home",
//     currentRoute: req.url
//   });
// });
// router.get("/Download", authMiddleware, (req, res) => {
//   res.render("Frontend/DownLoad", {
//     title: "home",
//     currentRoute: req.url
//   });
// });

// router.get("/about", authMiddleware, (req, res) => {
//   res.render("Frontend/about", {
//     title: "home",
//     currentRoute: req.url
//   });
// });
// router.get("/about2", authMiddleware, (req, res) => {
//   res.render("Frontend/about2", {
//     title: "home",
//     currentRoute: req.url
//   });
// });

// router.get("/FinalPage", authMiddleware, (req, res) => {
//   res.render("Frontend/FinalPage", {
//     title: "home",
//     currentRoute: req.url
//   });
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.redirect("/"); // Redirect to login if token is not present
  }

  // Your token validation logic here
  // If token is valid, call next()
  // If token is invalid, redirect to login

  next(); // Proceed to the next middleware or route handler
};

// Home Page Route
router.get("/", (req, res) => {
  res.render("Frontend/HomePage", {
    title: "home",
    currentRoute: req.url
  });
});

// Registration Page Route
router.get("/ITsolution", (req, res) => {
  res.render("Frontend/ITsolution", {
    title: "home",
    currentRoute: req.url
  });
});

// EMI Page Routes
router.get("/ITconsulting", (req, res) => {
  res.render("Frontend/ITconsulting.html", {
    title: "home",
    currentRoute: req.url
  });
});
router.get("/emi2", (req, res) => {
  res.render("Frontend/emi3", {
    title: "home",
    currentRoute: req.url
  });
});
router.get("/emi3", (req, res) => {
  res.render("Frontend/emi3", {
    title: "home",
    currentRoute: req.url
  });
});

// Service Page Route
router.get("/Service", (req, res) => {
  res.render("Frontend/Service", {
    title: "home",
    currentRoute: req.url
  });
});

// Other Form Page Route
router.get("/Other", (req, res) => {
  res.render("Frontend/OtherForm", {
    title: "home",
    currentRoute: req.url
  });
});

// Sanction Page Route
router.get("/sans", (req, res) => {
  res.render("Frontend/sansction", {
    title: "home",
    currentRoute: req.url
  });
});

// Download Page Route
router.get("/Download", (req, res) => {
  res.render("Frontend/DownLoad", {
    title: "home",
    currentRoute: req.url
  });
});

// About Pages Routes
router.get("/about", (req, res) => {
  res.render("Frontend/about", {
    title: "home",
    currentRoute: req.url
  });
});
router.get("/about2", (req, res) => {
  res.render("Frontend/about2", {
    title: "home",
    currentRoute: req.url
  });
});
// Final Page Route
router.get("/finaldownloadpage", (req, res) => {
  res.render("Frontend/finaldownloadpage", {
    title: "finaldownloadpage",
    currentRoute: req.url
  });
});

// Final Page Route
router.get("/FinalPage", (req, res) => {
  res.render("Frontend/FinalPage", {
    title: "home",
    currentRoute: req.url
  });
});

// Logout Route
router.get("/logout", (req, res) => {
  res.clearCookie("newtoken"); // Clear the token cookie
  res.redirect("/Reg"); // Redirect to the login page
});

module.exports = router;
