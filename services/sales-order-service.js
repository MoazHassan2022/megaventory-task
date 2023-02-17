const Service = require("./service");
const SalesOrder = require("../entities/sales-order-entity");

/**
 * Service class to handle SalesOrder manipulations.
 * @class SalesOrderService
 */
class SalesOrderService extends Service {
  /**
   * SalesOrder service class constructor
   * @constructor
   */
  constructor() {
    super("salesOrder");
  }

  /**
   * creates a sales order and adds it to your Megaventory account
   * @param {Object} data
   * @returns {SalesOrder} newSalesOrder
   * @function
   */
  insertSalesOrder = async (data) => {
    const salesOrder = new SalesOrder(
      null,
      data.clientId,
      data.productSKU,
      data.inventoryLocationId,
      data.taxId,
      data.discountId,
      data.quantity
    );
    const newSalesOrderRes = await this.update({
      mvSalesOrder: {
        SalesOrderClientId: salesOrder.getClientId(),
        SalesOrderInventoryLocationID: salesOrder.getInventoryLocationId(),
        SalesOrderDetails: [
          {
            SalesOrderRowProductSKU: salesOrder.getProductSKU(),
            SalesOrderRowTaxID: salesOrder.getTaxId(),
            SalesOrderRowDiscountID: salesOrder.getDiscountId(),
            SalesOrderRowQuantity: salesOrder.getQuantity(),
          },
        ],
        SalesOrderStatus: "Verified",
      },
      mvRecordAction: "Insert",
    });
    return newSalesOrderRes;
  };

  /**
   * edites a sales order in your Megaventory account
   * @param {Object} data
   * @returns {SalesOrder} updatedSalesOrder
   * @function
   */
  editSalesOrder = async (data) => {
    const salesOrder = new SalesOrder(
      data.id,
      data.clientId,
      data.productSKU,
      data.inventoryLocationId,
      data.taxId,
      data.discountId,
      data.quantity
    );
    const updatedSalesOrderRes = await this.update({
      mvSalesOrder: {
        SalesOrderId: salesOrder.getId(),
        SalesOrderClientId: salesOrder.getClientId(),
        SalesOrderInventoryLocationID: salesOrder.getInventoryLocationId(),
        SalesOrderDetails: [
          {
            SalesOrderRowProductSKU: salesOrder.getProductSKU(),
            SalesOrderRowTaxID: salesOrder.getTaxId(),
            SalesOrderRowDiscountID: salesOrder.getDiscountId(),
            SalesOrderRowQuantity: salesOrder.getQuantity(),
          },
        ],
        SalesOrderStatus: "Verified",
      },
      mvRecordAction: "Update",
    });
    return updatedSalesOrderRes;
  };
}

module.exports = SalesOrderService;
