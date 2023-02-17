const express = require("express");
const salesOrderController = require("../controllers/sales-order-controller");

const router = express.Router();

router.post("/", salesOrderController.insertSalesOrder);
router.patch("/", salesOrderController.editSalesOrder);

module.exports = router;
