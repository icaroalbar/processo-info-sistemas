import { Vehicle } from "../src/vehicle.entities";

describe("Vehicle tests", () => {
  it("Constructor", () => {
    const input: IVehicle = {
      plate: "ABC1D23",
      chassis: "9BWHE21JX24060960",
      renavam: "00123456789",
      model: "corolla",
      brand: "toyota",
      year: 2023,
    };
    const vehicle = new Vehicle(input);
    expect(vehicle.props).toStrictEqual(input);
  });
});
