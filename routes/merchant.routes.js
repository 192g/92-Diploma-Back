const express = require("express");
const { calculate } = require("../controller/index.controller");
const { create } = require("../controller/merchant.controller");
const router = express.Router();

router.route("/").post(create);
module.exports = router;
