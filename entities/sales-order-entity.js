const AppError = require("../utils/app-error");

/**
 * salesOrder class to represent SalesOrder entity.
 * @class SalesOrder
 */
class SalesOrder {
  // declaring private members
  #id;
  #clientId;
  #productSKU;
  #inventoryLocationId;
  #taxId;
  #discountId;
  #quantity;

  /**
   * SalesOrder class constructor
   * @constructor
   * @param {Number} id
   * @param {Number} clientId
   * @param {String} productSKU
   * @param {Number} inventoryLocationId
   * @param {Number} taxId
   * @param {Number} discountId
   * @param {Number} quantity
   */
  constructor(
    id,
    clientId,
    productSKU,
    inventoryLocationId,
    taxId,
    discountId,
    quantity
  ) {
    this.setId(id);
    this.setClientId(clientId);
    this.setProductSKU(productSKU);
    this.setInventoryLocationId(inventoryLocationId);
    this.setTaxId(taxId);
    this.setDiscountId(discountId);
    this.setQuantity(quantity);
  }

  /**
   * set sales order clientId
   * @param {Number} clientId
   * @function
   */
  setClientId = (clientId) => {
    // reject if null
    if (!clientId || clientId <= 0)
      throw new AppError("sales order clientId can't be null!", 400);
    this.#clientId = clientId;
  };

  /**
   * set sales order id
   * @param {Number} id
   * @function
   */
  setId = (id) => {
    this.#id = id;
  };

  /**
   * set sales order productSKU
   * @param {String} productSKU
   * @function
   */
  setProductSKU = (productSKU) => {
    // reject if null
    if (!productSKU || productSKU.length === 0)
      throw new AppError("sales order productSKU can't be null or empty!", 400);
    this.#productSKU = productSKU;
  };

  /**
   * set sales order inventoryLocationId
   * @param {Number} inventoryLocationId
   * @function
   */
  setInventoryLocationId = (inventoryLocationId) => {
    // reject if null
    if (!inventoryLocationId || inventoryLocationId <= 0)
      throw new AppError("sales order inventoryLocationId can't be null!", 400);
    this.#inventoryLocationId = inventoryLocationId;
  };

  /**
   * set sales order taxId
   * @param {Number} taxId
   * @function
   */
  setTaxId = (taxId) => {
    this.#taxId = taxId;
  };

  /**
   * set sales order discountId
   * @param {Number} discountId
   * @function
   */
  setDiscountId = (discountId) => {
    this.#discountId = discountId;
  };

  /**
   * set sales order quantity
   * @param {Number} quantity
   * @function
   */
  setQuantity = (quantity) => {
    // reject if null
    if (!quantity || quantity <= 0)
      throw new AppError("sales order quantity can't be null!", 400);
    this.#quantity = quantity;
  };

  /**
   * get sales order clientId
   * @returns {Number} clientId
   * @function
   */
  getClientId = () => {
    return this.#clientId;
  };

  /**
   * get sales order id
   * @returns {Number} id
   * @function
   */
  getId = () => {
    return this.#id;
  };

  /**
   * get sales order productSKU
   * @returns {String} productSKU
   * @function
   */
  getProductSKU = () => {
    return this.#productSKU;
  };

  /**
   * get sales order inventoryLocationId
   * @returns {Number} inventoryLocationId
   * @function
   */
  getInventoryLocationId = () => {
    return this.#inventoryLocationId;
  };

  /**
   * get sales order taxId
   * @returns {Number} taxId
   * @function
   */
  getTaxId = () => {
    return this.#taxId;
  };

  /**
   * get sales order discountId
   * @returns {Number} discountId
   * @function
   */
  getDiscountId = () => {
    return this.#discountId;
  };

  /**
   * get sales order quantity
   * @returns {Number} quantity
   * @function
   */
  getQuantity = () => {
    return this.#quantity;
  };
}
module.exports = SalesOrder;
