const asyncHandler = require("../middleware/asyncHandler");
const Employee = require("../model/employee");
const Merchant = require("../model/merchant");

exports.create = asyncHandler(async (req, res, next) => {
  const body = req.body;
  const data = await Employee.create(body);
  res.status(200).send({ success: true, data });
});
