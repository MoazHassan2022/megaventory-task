const catchAsync = require("../utils/catch-async");
const SalesOrderService = require("../services/sales-order-service");

const salesOrderServiceInstance = new SalesOrderService();

/**
 * insert a sales order into your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const insertSalesOrder = catchAsync(async (req, res) => {
  const newSalesOrder = await salesOrderServiceInstance.insertSalesOrder(
    req.body
  );
  return res.status(200).json({
    status: "success",
    SalesOrder: newSalesOrder,
  });
});

module.exports = {
  insertSalesOrder,
};
