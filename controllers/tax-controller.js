const catchAsync = require("../utils/catch-async");
const TaxService = require("../services/tax-service");

const taxServiceInstance = new TaxService();

/**
 * insert a tax into your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const insertTax = catchAsync(async (req, res) => {
  const newTax = await taxServiceInstance.insertTax(req.body);
  return res.status(200).json({
    status: "success",
    tax: newTax,
  });
});

/**
 * edit a tax in your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const editTax = catchAsync(async (req, res) => {
  const updatedTax = await taxServiceInstance.editTax(req.body);
  return res.status(200).json({
    status: "success",
    tax: updatedTax,
  });
});

module.exports = {
  insertTax,
  editTax,
};
