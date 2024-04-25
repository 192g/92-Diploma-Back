const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  bag: { type: String, required: true },
  apart: { type: String, required: true },
  floor: { type: Number, required: true },
  door: { type: Number, required: true },
  zip: { type: String, required: true },
});

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;
