const asyncHandler = require("../middleware/asyncHandler");
const Location = require("../model/location");
const Merchant = require("../model/merchant");

exports.create = asyncHandler(async (req, res, next) => {
  const body = req.body;
  const data = await Location.create(body);
  res.status(200).send({ success: true, data });
});
