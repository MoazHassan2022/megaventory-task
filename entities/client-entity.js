const AppError = require("../utils/app-error");

/**
 * Client class to represent Client entity.
 * @class Client
 */
class Client {
  // declaring private members
  #name;
  #email;
  #shippingAddress;
  #phone;

  /**
   * Client class constructor
   * @constructor
   * @param {String} name
   * @param {String} email
   * @param {String} shippingAddress
   * @param {String} phone
   */
  constructor(name, email, shippingAddress, phone) {
    this.setName(name);
    this.setEmail(email);
    this.setShippingAddress(shippingAddress);
    this.setPhone(phone);
  }

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
    // reject if empty
    if (!email || email.length === 0)
      throw new AppError("client email can't be null or empty!", 400);
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
