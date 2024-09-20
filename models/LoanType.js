const mongoose = require("mongoose");

const LoanTypeData = new mongoose.Schema({
  loanType: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    required: true
  },
  interest: {
    type: Number,
    required: true
  }
});

const LoanTypeDatas = mongoose.model("LoanTypeDatas", LoanTypeData);
module.exports = LoanTypeDatas;
