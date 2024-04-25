const express = require("express");
const { calculate } = require("../controller/index.controller");
const router = express.Router();

router.route("/").post(calculate);
module.exports = router;
