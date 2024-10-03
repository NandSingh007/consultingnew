const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  subject: { type: String },
  message: { type: String },
  resume: { type: String }, // Path to the uploaded resume file
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Consultation", consultationSchema);
