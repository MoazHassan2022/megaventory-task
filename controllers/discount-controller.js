const catchAsync = require("../utils/catch-async");
const DiscountService = require("../services/discount-service");

const discountServiceInstance = new DiscountService();

/**
 * insert a discount into your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const insertDiscount = catchAsync(async (req, res) => {
  const newDiscount = await discountServiceInstance.insertDiscount(req.body);
  return res.status(200).json({
    status: "success",
    Discount: newDiscount,
  });
});

/**
 * edit a discount in your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const editDiscount = catchAsync(async (req, res) => {
  const updatedDiscount = await discountServiceInstance.editDiscount(req.body);
  return res.status(200).json({
    status: "success",
    Discount: updatedDiscount,
  });
});

module.exports = {
  insertDiscount,
  editDiscount,
};
