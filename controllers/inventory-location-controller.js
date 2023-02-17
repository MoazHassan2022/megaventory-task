const catchAsync = require("../utils/catch-async");
const InventoryLocationService = require("../services/inventory-location-service");

const inventoryLocationServiceInstance = new InventoryLocationService();

/**
 * insert an inventory location into your account
 * @param {function} (req, res)
 * @returns {object} res
 */
const insertInventoryLocation = catchAsync(async (req, res) => {
  const newInventoryLocation =
    await inventoryLocationServiceInstance.insertInventoryLocation(req.body);
  return res.status(200).json({
    status: "success",
    inventoryLocation: newInventoryLocation,
  });
});

module.exports = {
  insertInventoryLocation,
};
