const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const FileUploadSchema = new Schema(
  {
    userId: {
      type: String, // Store as base64 encoded string or other type based on your needs
      required: false
    },
    profilePhotoUpload: {
      type: String, // Store as base64 encoded string or path to the file
      required: false
    },
    adharcardFront: {
      type: String, // Store as base64 encoded string or path to the file
      required: false
    },
    HolderName: {
      type: String
    },
    adharcardBack: {
      type: String, // Store as base64 encoded string or path to the file
      required: false
    },
    pancardPhoto: {
      type: String, // Store as base64 encoded string or path to the file
      required: false
    },
    adharcardNumber: {
      type: String,
      required: false
    },

    pancardNumber: {
      type: String,
      required: false
    },
    loanAmount: {
      type: String,
      required: false
    },
    duration: {
      type: String,
      required: false
    },
    loanType: {
      type: String,
      required: false
    },
    limit: {
      type: String
    },
    interest: {
      type: Number
    },
    capturedPhotoData: {
      type: String, // Store base64 data if needed
      required: false
    },
    // New fields for bank details
    bankName: {
      type: String,
      required: false
    },
    accountNumber: {
      type: String,
      required: false
    },
    ifscCode: {
      type: String,
      required: false
    },
    Status: {
      type: Number,
      default: 0
    },
    accountType: {
      type: String,
      required: false
    },
    statusOfBank: {
      type: Number,
      default: 0
    },
    insuranceamount: {
      type: String
    }
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Create the model
const FileUpload = mongoose.model("FileUpload", FileUploadSchema);

module.exports = FileUpload;
