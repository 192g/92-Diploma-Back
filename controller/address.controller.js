const asyncHandler = require("../middleware/asyncHandler");
const Address = require("../model/address");
const Merchant = require("../model/merchant");

exports.create = asyncHandler(async (req, res, next) => {
  const body = req.body;
  const data = await Address.create(body);
  res.status(200).send({ success: true, data });
});
