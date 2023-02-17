const express = require("express");
const taxController = require("../controllers/tax-controller");

const router = express.Router();

router.post("/", taxController.insertTax);

module.exports = router;
