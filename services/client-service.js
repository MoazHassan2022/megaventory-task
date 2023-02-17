const Service = require("./service");
const Client = require("../entities/client-entity");

/**
 * Service class to handle Client manipulations.
 * @class ClientService
 */
class ClientService extends Service {
  /**
   * Client service class constructor
   * @constructor
   */
  constructor() {
    super("client");
  }

  /**
   * creates a client and adds it to your Megaventory account
   * @param {object} data
   * @returns {Client} newClient
   * @function
   */
  insertClient = async (data) => {
    const client = new Client(
      data.name,
      data.email,
      data.shippingAddress,
      data.phone
    );
    const newClientRes = await this.insert({
      mvSupplierClient: {
        SupplierClientName: client.getName(),
        SupplierClientEmail: client.getEmail(),
        SupplierClientShippingAddress1: client.getShippingAddress(),
        SupplierClientPhone1: client.getPhone(),
      },
    });
    return newClientRes;
  };
}

module.exports = ClientService;
