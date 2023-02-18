/* eslint-disable */
const axios = require("axios");
const SalesOrderService = require("../services/sales-order-service");

const salesOrderServiceInstance = new SalesOrderService();

describe("testing insertSalesOrder service in SalesOrder service class", () => {
  describe("given clientId, productSKU, inventoryLocationId, taxId, discountId, and quantity", () => {
    test("should respond with a valid SalesOrder response object", async () => {
      const data = {
        clientId: 7,
        productSKU: "1112256",
        inventoryLocationId: 5,
        taxId: 1,
        discountId: 3,
        quantity: 10,
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvSalesOrder: {
            SalesOrderID: 11,
            SalesOrderClientID: 7,
            SalesOrderDetails: [
              {
                SalesOrderRowProductID: 37,
                SalesOrderRowProductSKU: "1112256",
                SalesOrderRowQuantity: "10",
                SalesOrderRowTaxID: 1,
                SalesOrderRowDiscountID: 3,
              },
            ],
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const newSalesOrder = await salesOrderServiceInstance.insertSalesOrder(
        data
      );
      expect(newSalesOrder.mvSalesOrder.SalesOrderClientID).toBe(7);
    });
  });
  describe("given null clientId, null productSKU, inventoryLocationId, taxId, discountId, and quantity", () => {
    test("should respond with an error", async () => {
      const data = {
        clientId: null,
        productSKU: null,
        inventoryLocationId: 5,
        taxId: 1,
        discountId: 3,
        quantity: 10,
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(
        salesOrderServiceInstance.insertSalesOrder(data)
      ).rejects.toThrowError();
    });
  });
});

describe("testing editSalesOrder service in SalesOrder service class", () => {
  describe("given id, sku, salesPrice, and purchasePrice", () => {
    test("should respond with a valid SalesOrder response object", async () => {
      const data = {
        id: 9,
        clientId: 7,
        productSKU: "1112256",
        inventoryLocationId: 5,
        taxId: 2,
        discountId: 3,
        quantity: 10,
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvSalesOrder: {
            SalesOrderID: 11,
            SalesOrderClientID: 7,
            SalesOrderDetails: [
              {
                SalesOrderRowProductID: 37,
                SalesOrderRowProductSKU: "1112256",
                SalesOrderRowQuantity: "10",
                SalesOrderRowTaxID: 2,
                SalesOrderRowDiscountID: 3,
              },
            ],
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const updatedSalesOrder = await salesOrderServiceInstance.editSalesOrder(
        data
      );
      expect(
        updatedSalesOrder.mvSalesOrder.SalesOrderDetails[0].SalesOrderRowTaxID
      ).toBe(2);
    });
  });
  describe("given null id, null clientId, null productSKU, inventoryLocationId, taxId, discountId, and quantity", () => {
    test("should respond with an error", async () => {
      const data = {
        id: null,
        clientId: null,
        productSKU: null,
        inventoryLocationId: 5,
        taxId: 1,
        discountId: 3,
        quantity: 10,
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(
        salesOrderServiceInstance.editSalesOrder(data)
      ).rejects.toThrowError();
    });
  });
});
