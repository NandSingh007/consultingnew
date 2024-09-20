const mongoose = require("mongoose");

const insuranceSchemadata = new mongoose.Schema({
  banktype: {
    type: String,
    required: true
  },
  insuranceamount: {
    type: Number,
    required: true
  },
  image: {
    type: String, // Assuming the image will be stored as a URL or file path
    required: true
  }
});

const InsuranceBank = mongoose.model("insuranceBankdata", insuranceSchemadata);
module.exports = InsuranceBank;
