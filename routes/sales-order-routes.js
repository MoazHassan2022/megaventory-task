const express = require("express");
const salesOrderController = require("../controllers/sales-order-controller");

const router = express.Router();

router.post("/", salesOrderController.insertSalesOrder);

module.exports = router;
