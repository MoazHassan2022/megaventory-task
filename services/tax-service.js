const Service = require("./service");
const Tax = require("../entities/Tax-entity");

/**
 * Service class to handle Tax manipulations.
 * @class TaxService
 */
class TaxService extends Service {
  /**
   * Tax service class constructor
   * @constructor
   */
  constructor() {
    super("tax");
  }

  /**
   * creates a tax and adds it to your Megaventory account
   * @param {Object} data
   * @returns {Tax} newTax
   * @function
   */
  insertTax = async (data) => {
    const tax = new Tax(data.name, data.description, data.value);
    const newTaxRes = await this.update({
      mvTax: {
        TaxName: tax.getName(),
        TaxDescription: tax.getDescription(),
        TaxValue: tax.getValue(),
      },
    });
    return newTaxRes;
  };
}

module.exports = TaxService;
