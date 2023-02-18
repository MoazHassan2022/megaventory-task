/* eslint-disable */
const axios = require("axios");
const InventoryLocationService = require("../services/inventory-location-service");

const inventoryLocationServiceInstance = new InventoryLocationService();

describe("testing insertInventoryLocation service in InventoryLocation service class", () => {
  describe("given name, abbreviation, and address", () => {
    test("should respond with a valid InventoryLocation response object", async () => {
      const data = {
        name: "Test Project Location",
        abbreviation: "Test",
        address: "Example 20, Athens",
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvInventoryLocation: {
            InventoryLocationID: 9,
            InventoryLocationName: "Test Project Location",
            InventoryLocationAbbreviation: "Test",
            InventoryLocationAddress: "Example 20, Athens",
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const newInventoryLocation =
        await inventoryLocationServiceInstance.insertInventoryLocation(data);
      expect(
        newInventoryLocation.mvInventoryLocation.InventoryLocationName
      ).toBe("Test Project Location");
    });
  });
  describe("given null name, null abbreviation, and address", () => {
    test("should respond with an error", async () => {
      const data = {
        name: null,
        abbreviation: null,
        address: "Example 20, Athens",
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(
        inventoryLocationServiceInstance.insertInventoryLocation(data)
      ).rejects.toThrowError();
    });
  });
});

describe("testing editInventoryLocation service in InventoryLocation service class", () => {
  describe("given id, name, abbreviation, and address", () => {
    test("should respond with a valid InventoryLocation response object", async () => {
      const data = {
        id: 9,
        name: "Test Project Location",
        abbreviation: "Test",
        address: "Example 20, Athens",
      };
      axios.post = jest.fn().mockReturnValueOnce({
        data: {
          mvInventoryLocation: {
            InventoryLocationID: 9,
            InventoryLocationName: "Test Project Location",
            InventoryLocationAbbreviation: "Test",
            InventoryLocationAddress: "Example 20, Athens",
          },
          ResponseStatus: {
            ErrorCode: "0",
          },
        },
      });
      const updatedInventoryLocation =
        await inventoryLocationServiceInstance.editInventoryLocation(data);
      expect(
        updatedInventoryLocation.mvInventoryLocation
          .InventoryLocationAbbreviation
      ).toBe("Test");
    });
  });
  describe("given null id, null name, null abbreviation, and address", () => {
    test("should respond with an error", async () => {
      const data = {
        id: null,
        name: null,
        abbreviation: null,
        address: "Example 20, Athens",
      };
      axios.post = jest.fn().mockReturnValueOnce(null);
      expect(
        inventoryLocationServiceInstance.editInventoryLocation(data)
      ).rejects.toThrowError();
    });
  });
});
