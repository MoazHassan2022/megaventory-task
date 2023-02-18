/* eslint-disable */
const axios = require("axios");
const TaxService = require("../services/tax-service");

const taxServiceInstance = new TaxService();

describe("testing insertTax service in tax service class", () => {
  describe("given name, description, and value", () => {
    test("should respond with a valid Tax response object", async () => {
      const data = {
        name: "VAT",
        description: "VAT GR",
        value: 24,
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvTax: {
            TaxID: 1,
            TaxName: "VAT",
            TaxDescription: "VAT GR",
            TaxValue: 24,
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const newTax = await taxServiceInstance.insertTax(data);
      expect(newTax.mvTax.TaxName).toBe("VAT");
    });
  });
  describe("given null name, null description, and value", () => {
    test("should respond with an error", async () => {
      const data = {
        name: null,
        description: null,
        value: 24,
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(taxServiceInstance.insertTax(data)).rejects.toThrowError();
    });
  });
});

describe("testing editTax service in tax service class", () => {
  describe("given id, name, description, and value", () => {
    test("should respond with a valid Tax response object", async () => {
      const data = {
        id: 1,
        name: "VAT",
        description: "VAT GR",
        value: 24,
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvTax: {
            TaxID: 1,
            TaxName: "VAT",
            TaxDescription: "VAT GR",
            TaxValue: 24,
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const updatedTax = await taxServiceInstance.editTax(data);
      expect(updatedTax.mvTax.TaxDescription).toBe("VAT GR");
    });
  });
  describe("given null id, null name, null description, and value", () => {
    test("should respond with an error", async () => {
      const data = {
        id: null,
        name: null,
        description: null,
        value: 24,
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(taxServiceInstance.editTax(data)).rejects.toThrowError();
    });
  });
});
