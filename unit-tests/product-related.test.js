/* eslint-disable */
const axios = require("axios");
const ProductService = require("../services/product-service");

const productServiceInstance = new ProductService();

describe("testing insertProduct service in product service class", () => {
  describe("given sku, description, salesPrice, and purchasePrice", () => {
    test("should respond with a valid Product response object", async () => {
      const data = {
        sku: "1112256",
        description: "Nike shoes",
        salesPrice: 99.99,
        purchasePrice: 44.99,
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvProduct: {
            ProductID: 9,
            ProductSKU: "1112256",
            ProductDescription: "Nike shoes",
            ProductSellingPrice: 99.99,
            ProductPurchasePrice: 44.99,
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const newProduct = await productServiceInstance.insertProduct(data);
      expect(newProduct.mvProduct.ProductSKU).toBe("1112256");
    });
  });
  describe("given null sku, null description, salesPrice, and purchasePrice", () => {
    test("should respond with an error", async () => {
      const data = {
        sku: null,
        description: null,
        salesPrice: 99.99,
        purchasePrice: 44.99,
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(productServiceInstance.insertProduct(data)).rejects.toThrowError();
    });
  });
});

describe("testing editProduct service in product service class", () => {
  describe("given id, sku, salesPrice, and purchasePrice", () => {
    test("should respond with a valid Product response object", async () => {
      const data = {
        id: 9,
        sku: "Nike shoes",
        description: "Nike shoes",
        salesPrice: 99.99,
        purchasePrice: 44.99,
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvProduct: {
            ProductID: 9,
            ProductSKU: "1112256",
            ProductDescription: "Nike shoes",
            ProductSellingPrice: 99.99,
            ProductPurchasePrice: 44.99,
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const updatedProduct = await productServiceInstance.editProduct(data);
      expect(updatedProduct.mvProduct.ProductDescription).toBe("Nike shoes");
    });
  });
  describe("given null id, null sku, null description, salesPrice, and purchasePrice", () => {
    test("should respond with an error", async () => {
      const data = {
        id: null,
        sku: null,
        description: null,
        salesPrice: 99.99,
        purchasePrice: 44.99,
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(productServiceInstance.editProduct(data)).rejects.toThrowError();
    });
  });
});
