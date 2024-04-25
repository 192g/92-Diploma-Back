const express = require("express");

const app = express();

const colors = require("colors");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const connectDb = require("./config/db");
dotenv.config({});
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
const errorHandler = require("./middleware/errorHandler");
const IndexRouter = require("./routes/index.routes");
const MerchantRouter = require("./routes/merchant.routes");
const LocationRouter = require("./routes/location.routes");
const AddressRouter = require("./routes/address.routes");
const EmployeeRouter = require("./routes/employee.routes");
//db connect
connectDb();
//db connect
app.use("/api/index", IndexRouter);
app.use("/api/merchant", MerchantRouter);
app.use("/api/location", LocationRouter);
app.use("/api/address", AddressRouter);
app.use("/api/employee", EmployeeRouter);
app.use(errorHandler);
const server = app.listen(3001, () => {
  console.log("server 3001 port дээр аслаа");
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`алдаа гарлаа : ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
