const mongoose = require("mongoose");

const CompanyProfileSchema = new mongoose.Schema({
  address: String,
  email: String,
  phone: String
});

module.exports = mongoose.model("CompanyProfileSdata", CompanyProfileSchema);
