/* eslint-disable */
const axios = require("axios");
const ClientService = require("../services/client-service");

const clientServiceInstance = new ClientService();

describe("testing insertClient service in client service class", () => {
  describe("given name, email, shippingAddress, and phone", () => {
    test("should respond with a valid client response object", async () => {
      const data = {
        name: "babis",
        email: "babis@exampletest.com",
        shippingAddress: "Example 8, Athens",
        phone: "1235698967",
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvSupplierClient: {
            SupplierClientID: 9,
            SupplierClientName: "babis",
            SupplierClientShippingAddress1: "Example 8, Athens",
            SupplierClientPhone1: "1235698967",
            SupplierClientEmail: "babis@exampletest.com",
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const newClient = await clientServiceInstance.insertClient(data);
      expect(newClient.mvSupplierClient.SupplierClientName).toBe("babis");
    });
  });
  describe("given null name, null email, shippingAddress, and phone", () => {
    test("should respond with an error", async () => {
      const data = {
        name: null,
        email: null,
        shippingAddress: "Example 8, Athens",
        phone: "1235698967",
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvSupplierClient: {
            SupplierClientID: 9,
            SupplierClientName: "babis",
            SupplierClientShippingAddress1: "Example 8, Athens",
            SupplierClientPhone1: "1235698967",
            SupplierClientEmail: "babis@exampletest.com",
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      expect(clientServiceInstance.insertClient(data)).rejects.toThrowError();
    });
  });
});

describe("testing editClient service in client service class", () => {
  describe("given id, name, email, shippingAddress, and phone", () => {
    test("should respond with a valid client response object", async () => {
      const data = {
        id: 9,
        name: "babis",
        email: "babis@exampletest.com",
        shippingAddress: "Example 8, Cairo",
        phone: "1235698967",
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvSupplierClient: {
            SupplierClientID: 9,
            SupplierClientName: "babis",
            SupplierClientShippingAddress1: "Example 8, Cairo",
            SupplierClientPhone1: "1235698967",
            SupplierClientEmail: "babis@exampletest.com",
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const updatedClient = await clientServiceInstance.editClient(data);
      expect(
        updatedClient.mvSupplierClient.SupplierClientShippingAddress1
      ).toBe("Example 8, Cairo");
    });
  });
  describe("given null id, null name, null email, shippingAddress, and phone", () => {
    test("should respond with an error", async () => {
      const data = {
        id: null,
        name: null,
        email: null,
        shippingAddress: "Example 8, Cairo",
        phone: "1235698967",
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvSupplierClient: {
            SupplierClientID: 9,
            SupplierClientName: "babis",
            SupplierClientShippingAddress1: "Example 8, Athens",
            SupplierClientPhone1: "1235698967",
            SupplierClientEmail: "babis@exampletest.com",
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      expect(clientServiceInstance.editClient(data)).rejects.toThrowError();
    });
  });
});
