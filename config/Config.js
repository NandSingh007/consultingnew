const dotenv = require("dotenv");
dotenv.config();

// Configuration object with various settings
const config = {
  // MongoDB connection URI
  baseUrl: "https://selectsphere.in",
  mongoURI:
    "mongodb://shubhamsrathore07:q33vLkduP8RCt2NJ@consultancy/?ssl=true&replicaSet=atlas-8152ie-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0",
  // "mongodb+srv://worldpay472:q33vLkduP8RCt2NJ@cluster0.rsun1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  // AqtSlTDgrYah1D5T

  port: 6500
};
module.exports = config;
