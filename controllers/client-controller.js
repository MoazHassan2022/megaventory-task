const catchAsync = require("../utils/catch-async");
const ClientService = require("../services/client-service");

const clientServiceInstance = new ClientService();

/**
 * insert a client into your account
 * @param {function} (req, res)
 * @returns {object} res
 */
const insertClient = catchAsync(async (req, res) => {
  const newClient = await clientServiceInstance.insertClient(req.body);
  return res.status(200).json({
    status: "success",
    client: newClient,
  });
});

module.exports = {
  insertClient,
};