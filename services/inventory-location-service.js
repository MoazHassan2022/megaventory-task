const Service = require("./service");
const InventoryLocation = require("../entities/inventory-location-entity");

/**
 * Service class to handle InventoryLocation manipulations.
 * @class InventoryLocationService
 */
class InventoryLocationService extends Service {
  /**
   * InventoryLocation service class constructor
   * @constructor
   */
  constructor() {
    super("inventoryLocation");
  }

  /**
   * creates an inventory location and adds it to your Megaventory account
   * @param {Object} data
   * @returns {InventoryLocation} newInventoryLocation
   * @function
   */
  insertInventoryLocation = async (data) => {
    const inventoryLocation = new InventoryLocation(
      data.name,
      data.abbreviation,
      data.address
    );
    const newInventoryLocationRes = await this.update({
      mvInventoryLocation: {
        InventoryLocationName: inventoryLocation.getName(),
        InventoryLocationAbbreviation: inventoryLocation.getAbbreviation(),
        InventoryLocationAddress: inventoryLocation.getAddress(),
      },
    });
    return newInventoryLocationRes;
  };
}

module.exports = InventoryLocationService;
