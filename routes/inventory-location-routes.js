const express = require("express");
const inventoryLocationController = require("../controllers/inventory-location-controller");

const router = express.Router();

router.post("/", inventoryLocationController.insertInventoryLocation);

module.exports = router;
