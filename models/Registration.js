const { required } = require("joi");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  Username: {
    type: String,
    required: true
  }
});

const Registration = mongoose.model("Registration", UserSchema);

module.exports = Registration;
