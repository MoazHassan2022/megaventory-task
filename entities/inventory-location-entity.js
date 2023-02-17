const AppError = require("../utils/app-error");

/**
 * InventoryLocation class to represent InventoryLocation entity.
 * @class InventoryLocation
 */
class InventoryLocation {
  // declaring private members
  #id;
  #name;
  #abbreviation;
  #address;

  /**
   * InventoryLocation class constructor
   * @constructor
   * @param {Number} id
   * @param {String} name
   * @param {String} abbreviation
   * @param {String} address
   */
  constructor(id, name, abbreviation, address) {
    this.setId(id);
    this.setName(name);
    this.setAbbreviation(abbreviation);
    this.setAddress(address);
  }

  /**
   * set inventory location id
   * @param {Number} id
   * @function
   */
  setId = (id) => {
    this.#id = id;
  };

  /**
   * set inventory location name
   * @param {String} name
   * @function
   */
  setName = (name) => {
    // reject if empty
    if (!name || name.length === 0)
      throw new AppError(
        "inventory location name can't be null or empty!",
        400
      );
    this.#name = name;
  };

  /**
   * set inventory location abbreviation
   * @param {String} abbreviation
   * @function
   */
  setAbbreviation = (abbreviation) => {
    // reject if empty
    if (!abbreviation || abbreviation.length === 0)
      throw new AppError(
        "inventory location abbreviation can't be null or empty!",
        400
      );
    this.#abbreviation = abbreviation;
  };

  /**
   * set inventory location address
   * @param {String} address
   * @function
   */
  setAddress = (address) => {
    this.#address = address;
  };

  /**
   * get inventory location id
   * @returns {Number} id
   * @function
   */
  getId = () => {
    return this.#id;
  };

  /**
   * get inventory location name
   * @returns {String} name
   * @function
   */
  getName = () => {
    return this.#name;
  };

  /**
   * get inventory location abbreviation
   * @returns {String} abbreviation
   * @function
   */
  getAbbreviation = () => {
    return this.#abbreviation;
  };

  /**
   * get inventory location address
   * @returns {String} address
   * @function
   */
  getAddress = () => {
    return this.#address;
  };
}
module.exports = InventoryLocation;
