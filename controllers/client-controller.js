const catchAsync = require("../utils/catch-async");
const ClientService = require("../services/client-service");

const clientServiceInstance = new ClientService();

/**
 * insert a client into your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const insertClient = catchAsync(async (req, res) => {
  const newClient = await clientServiceInstance.insertClient(req.body);
  return res.status(200).json({
    status: "success",
    client: newClient,
  });
});

/**
 * edit a client into your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const editClient = catchAsync(async (req, res) => {
  const updatedClient = await clientServiceInstance.editClient(req.body);
  return res.status(200).json({
    status: "success",
    client: updatedClient,
  });
});

module.exports = {
  insertClient,
  editClient,
};
