const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  adharcardNumber: {
    type: String,
    required: true
  },
  pancardNumber: {
    type: String,
    required: true
  },
  capturedPhotoData: {
    type: [String],
    default: []
  },
  files: {
    adharcardFront: {
      type: String,
      default: null
    },
    adharcardBack: {
      type: String,
      default: null
    },
    pancardPhoto: {
      type: String,
      default: null
    }
  }
});

const LoanSchema = new mongoose.Schema({
  loanAmount: {
    type: String,
    required: true
  },
  Duration: {
    type: String,
    required: true
  },
  loanType: {
    type: String,
    required: true
  }
});

const FormSchema = new mongoose.Schema({
  document: {
    type: DocumentSchema,
    required: true
  },
  loan: {
    type: LoanSchema,
    required: true
  }
});

const FormSubmission = mongoose.model("FormSubmission", FormSchema);

module.exports = FormSubmission;
