const AppError = require("../utils/app-error");

/**
 * Product class to represent Product entity.
 * @class Product
 */
class Product {
  // declaring private members
  #id;
  #sku;
  #description;
  #salesPrice;
  #purchasePrice;

  /**
   * Product class constructor
   * @constructor
   * @param {Number} id
   * @param {String} sku
   * @param {String} description
   * @param {Number} salesPrice
   * @param {Number} purchasePrice
   */
  constructor(id, sku, description, salesPrice, purchasePrice) {
    this.setId(id);
    this.setSKU(sku);
    this.setDescription(description);
    this.setSalesPrice(salesPrice);
    this.setPurchasePrice(purchasePrice);
  }

  /**
   * set product id
   * @param {Number} id
   * @function
   */
  setId = (id) => {
    this.#id = id;
  };

  /**
   * set product SKU (stock-keeping unit) code
   * @param {String} sku
   * @function
   */
  setSKU = (sku) => {
    // reject if empty
    if (!sku || sku.length === 0)
      throw new AppError("product SKU can't be null or empty!", 400);
    this.#sku = sku;
  };

  /**
   * set product description
   * @param {String} description
   * @function
   */
  setDescription = (description) => {
    // reject if empty
    if (!description || description.length === 0)
      throw new AppError("product description can't be null or empty!", 400);
    this.#description = description;
  };

  /**
   * set product sales price
   * @param {Number} salesPrice
   * @function
   */
  setSalesPrice = (salesPrice) => {
    this.#salesPrice = salesPrice;
  };

  /**
   * set product purchase price
   * @param {Number} purchasePrice
   * @function
   */
  setPurchasePrice = (purchasePrice) => {
    this.#purchasePrice = purchasePrice;
  };

  /**
   * get product id
   * @returns {Number} id
   * @function
   */
  getId = () => {
    return this.#id;
  };

  /**
   * get product SKU (stock-keeping unit) code
   * @returns {String} SKU
   * @function
   */
  getSKU = () => {
    return this.#sku;
  };

  /**
   * get product description
   * @returns {String} description
   * @function
   */
  getDescription = () => {
    return this.#description;
  };

  /**
   * get product sales price
   * @returns {Number} salesPrice
   * @function
   */
  getSalesPrice = () => {
    return this.#salesPrice;
  };

  /**
   * get product purchase price
   * @returns {Number} purchasePrice
   * @function
   */
  getPurchasePrice = () => {
    return this.#purchasePrice;
  };
}
module.exports = Product;
