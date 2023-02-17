const catchAsync = require("../utils/catch-async");
const InventoryLocationService = require("../services/inventory-location-service");

const inventoryLocationServiceInstance = new InventoryLocationService();

/**
 * insert an inventory location into your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const insertInventoryLocation = catchAsync(async (req, res) => {
  const newInventoryLocation =
    await inventoryLocationServiceInstance.insertInventoryLocation(req.body);
  return res.status(200).json({
    status: "success",
    inventoryLocation: newInventoryLocation,
  });
});

/**
 * edit an inventory location in your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const editInventoryLocation = catchAsync(async (req, res) => {
  const updatedInventoryLocation =
    await inventoryLocationServiceInstance.editInventoryLocation(req.body);
  return res.status(200).json({
    status: "success",
    inventoryLocation: updatedInventoryLocation,
  });
});

module.exports = {
  insertInventoryLocation,
  editInventoryLocation,
};
