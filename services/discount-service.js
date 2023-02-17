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
    const discount = new Discount(
      null,
      data.name,
      data.description,
      data.value
    );
    const newDiscountRes = await this.update({
      mvDiscount: {
        DiscountName: discount.getName(),
        DiscountDescription: discount.getDescription(),
        DiscountValue: discount.getValue(),
      },
      mvRecordAction: "Insert",
    });
    return newDiscountRes;
  };

  /**
   * edits a discount in your Megaventory account
   * @param {Object} data
   * @returns {Discount} updatedDiscount
   * @function
   */
  editDiscount = async (data) => {
    const discount = new Discount(
      data.id,
      data.name,
      data.description,
      data.value
    );
    const newDiscountRes = await this.update({
      mvDiscount: {
        DiscountId: discount.getId(),
        DiscountName: discount.getName(),
        DiscountDescription: discount.getDescription(),
        DiscountValue: discount.getValue(),
      },
      mvRecordAction: "Update",
    });
    return newDiscountRes;
  };
}

module.exports = DiscountService;
