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
      null,
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
      mvRecordAction: "Insert",
    });
    return newInventoryLocationRes;
  };

  /**
   * edites an inventory location in your Megaventory account
   * @param {Object} data
   * @returns {InventoryLocation} updatedInventoryLocation
   * @function
   */
  editInventoryLocation = async (data) => {
    const inventoryLocation = new InventoryLocation(
      data.id,
      data.name,
      data.abbreviation,
      data.address
    );
    const updatedInventoryLocationRes = await this.update({
      mvInventoryLocation: {
        InventoryLocationId: inventoryLocation.getId(),
        InventoryLocationName: inventoryLocation.getName(),
        InventoryLocationAbbreviation: inventoryLocation.getAbbreviation(),
        InventoryLocationAddress: inventoryLocation.getAddress(),
      },
      mvRecordAction: "Update",
    });
    return updatedInventoryLocationRes;
  };
}

module.exports = InventoryLocationService;
