const AppError = require("../utils/app-error");

/**
 * Discount class to represent Discount entity.
 * @class Discount
 */
class Discount {
  // declaring private members
  #id;
  #name;
  #description;
  #value;

  /**
   * Discount class constructor
   * @constructor
   * @param {Number} id
   * @param {String} name
   * @param {String} description
   * @param {Number} value
   */
  constructor(id, name, description, value) {
    this.setId(id);
    this.setName(name);
    this.setDescription(description);
    this.setValue(value);
  }

  /**
   * set discount name
   * @param {Number} id
   * @function
   */
  setId = (id) => {
    this.#id = id;
  };

  /**
   * set discount name
   * @param {String} name
   * @function
   */
  setName = (name) => {
    // reject if empty
    if (!name || name.length === 0)
      throw new AppError("discount name can't be null or empty!", 400);
    this.#name = name;
  };

  /**
   * set discount description
   * @param {String} description
   * @function
   */
  setDescription = (description) => {
    this.#description = description;
  };

  /**
   * set discount value
   * @param {Number} value
   * @function
   */
  setValue = (value) => {
    if (!value) throw new AppError("discount value can't be null!", 400);
    this.#value = value;
  };

  /**
   * get discount id
   * @returns {Number} id
   * @function
   */
  getId = () => {
    return this.#id;
  };

  /**
   * get discount name
   * @returns {String} name
   * @function
   */
  getName = () => {
    return this.#name;
  };

  /**
   * get discount description
   * @returns {String} description
   * @function
   */
  getDescription = () => {
    return this.#description;
  };

  /**
   * get discount value
   * @returns {Number} value
   * @function
   */
  getValue = () => {
    return this.#value;
  };
}
module.exports = Discount;
