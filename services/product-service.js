const Service = require("./service");
const Product = require("../entities/product-entity");

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
    const newProductRes = await this.insert({
      mvProduct: {
        ProductSKU: product.getSKU(),
        ProductDescription: product.getDescription(),
        ProductSellingPrice: product.getSalesPrice(),
        ProductPurchasePrice: product.getSalesPrice(),
      },
    });
    return newProductRes;
  };
}

module.exports = ProductService;
