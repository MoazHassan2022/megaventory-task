const express = require("express");
const taxController = require("../controllers/tax-controller");

const router = express.Router();

router.post("/", taxController.insertTax);
router.patch("/", taxController.editTax);

module.exports = router;
