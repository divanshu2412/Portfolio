const mongoose = require("mongoose");
// const validator = require("validator");
const customerQuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    // validate: [validator.isEmail, "Please provide a valid email"],
  },
  message: {
    type: String,
    required: [true, "Please provide a message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CustomerQuery = mongoose.model("CustomerQuery", customerQuerySchema);

module.exports = CustomerQuery;
