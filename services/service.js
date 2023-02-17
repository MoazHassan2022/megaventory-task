const axios = require("axios");
const AppError = require("./../utils/app-error");

//const axios = new Axios();

/**
 * Service class to handle common Megaventory API requests.
 * @class Service
 */
class Service {
  // declaring private members
  #entity;
  #entityRequestMap;
  /**
   * Service class constructor
   * @constructor
   * @param {String} entity
   */
  constructor(entity) {
    const baseURL = process.env.BASE_URL;
    this.setEntityRequestMap(baseURL);
    this.setEntity(entity);
  }

  /**
   * set entity-request map
   * @param {String} baseURL
   * @function
   */
  setEntityRequestMap = (baseURL) => {
    this.#entityRequestMap = {
      product: `${baseURL}/Product/ProductUpdate`,
      client: `${baseURL}/SupplierClient/SupplierClientUpdate`,
      inventoryLocation: `${baseURL}/InventoryLocation/InventoryLocationUpdate`,
      tax: `${baseURL}/Tax/TaxUpdate`,
      discount: `${baseURL}/Discount/DiscountUpdate`,
      salesOrder: `${baseURL}/SalesOrder/SalesOrderUpdate`,
    };
  };

  /**
   * set service entity
   * @param {String} entity
   * @function
   */
  setEntity = (entity) => {
    // reject if empty
    if (!entity || entity.length === 0)
      throw new AppError("service entity can't be null or empty!", 500);
    // check if the entity in entity-request map
    const entityIndex = Object.keys(this.#entityRequestMap).findIndex(
      (key) => key === entity
    );
    if (entityIndex === -1)
      throw new AppError("service entity isn't found!", 500);
    this.#entity = entity;
  };

  /**
   * update/insert an entity in your Megaventory account
   * @param {String} entity
   * @function
   */
  update = async (data) => {
    // add API key in the body
    data.APIKEY = process.env.API_KEY;
    // send a request to Megaventory API request of this entity
    const res = await axios.post(this.#entityRequestMap[this.#entity], data);
    const resStatus = res.data.ResponseStatus;
    if (resStatus.ErrorCode !== "0") {
      // it means that there is an error, so throw it
      throw new AppError(resStatus.Message, +resStatus.ErrorCode);
    }
    return res.data;
  };
}
module.exports = Service;
