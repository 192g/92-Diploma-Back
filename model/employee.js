const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: mongoose.Schema.ObjectId, required: true, ref: "Merchant" },
  email: { type: String, required: true },
  social: { type: Number },
  phone_number: { type: Number, required: true },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
