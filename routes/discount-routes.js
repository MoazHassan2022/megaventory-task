const express = require("express");
const discountController = require("../controllers/discount-controller");

const router = express.Router();

router.post("/", discountController.insertDiscount);
router.patch("/", discountController.editDiscount);

module.exports = router;
