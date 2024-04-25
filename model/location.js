const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  province: { type: String, required: true },
  sum: { type: String, required: true },
  lng: { type: Number, required: true },
  lat: { type: Number, required: true },
  tree: { type: Number, required: true },
  carbon: { type: Number, required: true },
});

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
