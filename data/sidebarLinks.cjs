// const sidebarLinks = [
//   { name: "Dashboard", route: "/back/home", icon: "bi bi-grid", active: true },
//   {
//     name: "User",
//     route: "/back/player",
//     icon: "bi bi-people-fill",
//     active: false
//   },
//   {
//     name: "Company Profile",
//     route: "/back/rech_pe",
//     icon: "bi bi-people-fill",
//     active: false
//   },
//   {
//     name: "Profile",
//     route: "/back/users-profile",
//     icon: "bi bi-person",
//     active: false
//   },
//   // {
//   //   name: "Processing",
//   //   icon: "bi bi-bar-chart",
//   //   active: false,
//   //   submenu: [
//   {
//     name: "Processing_Request",
//     route: "/back/with_re",
//     icon: "bi bi-circle",
//     active: false
//   },
//   {
//     name: "Processing_Approval",
//     route: "/back/with_app",
//     icon: "bi bi-circle",
//     active: false
//   },
//   {
//     name: "Processing_Reject",
//     route: "/back/with_rej",
//     icon: "bi bi-circle",
//     active: false
//   },
//   //   ]
//   // // },
//   // {
//   //   name: "Security",
//   //   icon: "bi bi-bar-chart",
//   //   active: false,
//   //   submenu: [
//   {
//     name: " Security_Request",
//     route: "/back/sec_re",
//     icon: "bi bi-circle",
//     active: false
//   },
//   {
//     name: "Security_Approval",
//     route: "/back/sec_app",
//     icon: "bi bi-circle",
//     active: false
//   },
//   {
//     name: "Security_Reject",
//     route: "/back/sec_rej",
//     icon: "bi bi-circle",
//     active: false
//   },
//   //   ]
//   // },
//   {
//     name: "Loan Type",
//     route: "/back/Bonus",
//     icon: "bi bi-circle",
//     active: "0"
//   },
//   // {
//   //   name: "Setting",
//   //   icon: "bi bi-gear",
//   //   active: false,
//   //   submenu: [
//   //     {
//   //       name: "Loan Type",
//   //       route: "/back/Bonus",
//   //       icon: "bi bi-circle",
//   //       active: "0"
//   //     }
//   //   ]
//   // },
//   {
//     name: "Logout",
//     route: "/back/logout",
//     icon: "bi bi-question-circle",
//     active: false
//   }
// ];

// module.exports = sidebarLinks;
const sidebarLinks = [
  {
    name: "Dashboard",
    route: "/back/home",
    icon: "bi bi-house-door",
    active: true
  },
  {
    name: "User",
    route: "/back/player",
    icon: "bi bi-person-fill",
    active: false
  },
  {
    name: "Company Profile",
    route: "/back/rech_pe",
    icon: "bi bi-building",
    active: false
  },
  {
    name: "Profile",
    route: "/back/users-profile",
    icon: "bi bi-person",
    active: false
  },

  {
    name: "Logout",
    route: "/back/logout",
    icon: "bi bi-box-arrow-right",
    active: false
  }
];

module.exports = sidebarLinks;
