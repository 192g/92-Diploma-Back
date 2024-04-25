const asyncHandler = require("../middleware/asyncHandler");
exports.calculate = asyncHandler(async (req, res, next) => {
  console.log("🚀 ~ exports.calculate=asyncHandler ~ req.body:", req.body);
  const { fuel, gas, electricity, employee, trip } = req.body;
  if (
    fuel === null ||
    gas === null ||
    electricity === null ||
    employee === null ||
    trip === null
  )
    res.status(400).send({ success: false, message: "Өгөгдөл дутуу байна!" });
  else {
    let field1 = employee * 15 * 0.12 * 20;
    let field2 = fuel * 2.68 + gas * 2.75;
    let field3 = (electricity / 187) * 0.5;
    let field4 = trip * 0.195;

    const total_carbon = field1 + field2 + field3 + field4;
    const total_amount = total_carbon * 271;
    res.status(200).send({ success: true, total_carbon, total_amount });
  }
});
