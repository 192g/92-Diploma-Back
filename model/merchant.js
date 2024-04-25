const mongoose = require("mongoose");

const MerchantSchema = mongoose.Schema({
  name: { type: String, required: true },
  reg_no: { type: String, required: true },
  activity_type: { type: String, required: true },
  employee: { type: Number, required: true },
  year: { type: Number, required: true },
  web: { type: String, required: true },
  address: { type: mongoose.Schema.ObjectId, ref: "Address" },
  req_type: { type: String, required: true, enum: ["Авах", "Зарах"] },
});

const Merchant = mongoose.model("Merchant", MerchantSchema);
module.exports = Merchant;
