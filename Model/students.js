const mongoose = require("mongoose");

const studentData = mongoose.Schema({
  email: {
    type: "string",
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  phonNumber: {
    type: "number",
    required: true,
  },
  age: {
    type: String,
    required: true,
  },

  dateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("curd-operation", studentData);
