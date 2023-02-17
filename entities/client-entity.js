const AppError = require("../utils/app-error");

/**
 * Client class to represent Client entity.
 * @class Client
 */
class Client {
  // declaring private members
  #id;
  #name;
  #email;
  #shippingAddress;
  #phone;

  /**
   * Client class constructor
   * @constructor
   * @param {Number} id
   * @param {String} name
   * @param {String} email
   * @param {String} shippingAddress
   * @param {String} phone
   */
  constructor(id, name, email, shippingAddress, phone) {
    this.setId(id);
    this.setName(name);
    this.setEmail(email);
    this.setShippingAddress(shippingAddress);
    this.setPhone(phone);
  }

  /**
   * set client id
   * @param {Number} id
   * @function
   */
  setId = (id) => {
    this.#id = id;
  };

  /**
   * set client name
   * @param {String} name
   * @function
   */
  setName = (name) => {
    // reject if empty
    if (!name || name.length === 0)
      throw new AppError("client name can't be null or empty!", 400);
    this.#name = name;
  };

  /**
   * set client email
   * @param {String} email
   * @function
   */
  setEmail = (email) => {
    this.#email = email;
  };

  /**
   * set client shipping address
   * @param {String} shippingAddress
   * @function
   */
  setShippingAddress = (shippingAddress) => {
    this.#shippingAddress = shippingAddress;
  };

  /**
   * set client phone number
   * @param {String} phone
   * @function
   */
  setPhone = (phone) => {
    this.#phone = phone;
  };

  /**
   * get client id
   * @returns {Number} id
   * @function
   */
  getId = () => {
    return this.#id;
  };

  /**
   * get client name
   * @returns {String} name
   * @function
   */
  getName = () => {
    return this.#name;
  };

  /**
   * get client email
   * @returns {String} email
   * @function
   */
  getEmail = () => {
    return this.#email;
  };

  /**
   * get client shipping address
   * @returns {String} shippingAddress
   * @function
   */
  getShippingAddress = () => {
    return this.#shippingAddress;
  };

  /**
   * get client phone number
   * @returns {String} phone
   * @function
   */
  getPhone = () => {
    return this.#phone;
  };
}
module.exports = Client;
