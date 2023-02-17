/* eslint-disable */
const axios = require("axios");
const DiscountService = require("../services/discount-service");

const discountServiceInstance = new DiscountService();

describe("testing insertDiscount service in discount service class", () => {
  describe("given name, description, and value", () => {
    test("should respond with a valid discount response object", async () => {
      const data = {
        name: "Loyalty",
        description: "Loyalty Customer Discount",
        value: 50,
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvDiscount: {
            DiscountID: 9,
            DiscountName: "Loyalty",
            DiscountDescription: "Loyalty Customer Discount",
            DiscountValue: 50,
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const newDiscount = await discountServiceInstance.insertDiscount(data);
      expect(newDiscount.mvDiscount.DiscountName).toBe("Loyalty");
    });
  });
  describe("given null name, null description, and value", () => {
    test("should respond with an error", async () => {
      const data = {
        name: null,
        description: null,
        value: 50,
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(
        discountServiceInstance.insertDiscount(data)
      ).rejects.toThrowError();
    });
  });
});

describe("testing editDiscount service in discount service class", () => {
  describe("given id, name, description, and value", () => {
    test("should respond with a valid discount response object", async () => {
      const data = {
        id: 9,
        name: "Loyalty",
        description: "Loyalty Customer Discount",
        value: 50,
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvDiscount: {
            DiscountID: 9,
            DiscountName: "Loyalty",
            DiscountDescription: "Loyalty Customer Discount",
            DiscountValue: 50,
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const updatedDiscount = await discountServiceInstance.editDiscount(data);
      expect(updatedDiscount.mvDiscount.DiscountDescription).toBe(
        "Loyalty Customer Discount"
      );
    });
  });
  describe("given null id, null name, null description, and value", () => {
    test("should respond with an error", async () => {
      const data = {
        id: null,
        name: null,
        description: null,
        value: 50,
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(discountServiceInstance.editDiscount(data)).rejects.toThrowError();
    });
  });
});
