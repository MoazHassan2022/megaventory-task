const Service = require("./service");
const Discount = require("../entities/discount-entity");

/**
 * Service class to handle Discount manipulations.
 * @class DiscountService
 */
class DiscountService extends Service {
  /**
   * Discount service class constructor
   * @constructor
   */
  constructor() {
    super("discount");
  }

  /**
   * creates a discount and adds it to your Megaventory account
   * @param {Object} data
   * @returns {Discount} newDiscount
   * @function
   */
  insertDiscount = async (data) => {
    const discount = new Discount(data.name, data.description, data.value);
    const newDiscountRes = await this.insert({
      mvDiscount: {
        DiscountName: discount.getName(),
        DiscountDescription: discount.getDescription(),
        DiscountValue: discount.getValue(),
      },
    });
    return newDiscountRes;
  };
}

module.exports = DiscountService;
