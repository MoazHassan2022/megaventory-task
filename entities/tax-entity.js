const AppError = require("../utils/app-error");

/**
 * Tax class to represent Tax entity.
 * @class Tax
 */
class Tax {
  // declaring private members
  #id;
  #name;
  #description;
  #value;

  /**
   * Tax class constructor
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
   * set tax id
   * @param {Number} id
   * @function
   */
  setId = (id) => {
    this.#id = id;
  };

  /**
   * set tax name
   * @param {String} name
   * @function
   */
  setName = (name) => {
    // reject if empty
    if (!name || name.length === 0)
      throw new AppError("tax name can't be null or empty!", 400);
    this.#name = name;
  };

  /**
   * set Tax description
   * @param {String} description
   * @function
   */
  setDescription = (description) => {
    this.#description = description;
  };

  /**
   * set tax value
   * @param {Number} value
   * @function
   */
  setValue = (value) => {
    if (!value) throw new AppError("tax value can't be null!", 400);
    this.#value = value;
  };

  /**
   * get tax id
   * @returns {Number} id
   * @function
   */
  getId = () => {
    return this.#id;
  };

  /**
   * get tax name
   * @returns {String} name
   * @function
   */
  getName = () => {
    return this.#name;
  };

  /**
   * get tax description
   * @returns {String} description
   * @function
   */
  getDescription = () => {
    return this.#description;
  };

  /**
   * get tax value
   * @returns {Number} value
   * @function
   */
  getValue = () => {
    return this.#value;
  };
}
module.exports = Tax;
