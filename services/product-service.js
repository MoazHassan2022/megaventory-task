const Service = require("./service");
const Product = require("../entities/product-entity");
const AppError = require("../utils/app-error");

/**
 * Service class to handle Product manipulations.
 * @class ProductService
 */
class ProductService extends Service {
  /**
   * Product service class constructor
   * @constructor
   */
  constructor() {
    super("product");
  }

  /**
   * creates a product and adds it to your Megaventory account
   * @param {Object} data
   * @returns {Product} newProduct
   * @function
   */
  insertProduct = async (data) => {
    const product = new Product(
      data.sku,
      data.description,
      data.salesPrice,
      data.purchasePrice
    );
    const newProductRes = await this.update({
      mvProduct: {
        ProductSKU: product.getSKU(),
        ProductDescription: product.getDescription(),
        ProductSellingPrice: product.getSalesPrice(),
        ProductPurchasePrice: product.getSalesPrice(),
      },
      mvRecordAction: "Insert",
    });
    return newProductRes;
  };

  /**
   * edits a product in your Megaventory account
   * @param {Object} data
   * @returns {Product} updatedProduct
   * @function
   */
  editProduct = async (data) => {
    if (!data.id || data.id <= 0)
      throw new AppError("product id can't be null or less than 0!", 400);
    const product = new Product(
      data.id,
      data.sku,
      data.description,
      data.salesPrice,
      data.purchasePrice
    );
    const newProductRes = await this.update({
      mvProduct: {
        ProductID: product.getId(),
        ProductSKU: product.getSKU(),
        ProductDescription: product.getDescription(),
        ProductSellingPrice: product.getSalesPrice(),
        ProductPurchasePrice: product.getSalesPrice(),
      },
      mvRecordAction: "Update",
    });
    return newProductRes;
  };
}

module.exports = ProductService;
