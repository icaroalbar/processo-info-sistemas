import { Vehicle } from "../src/vehicle-entities";
import { IVehicle } from "../src/vehicle-repository";

describe("Vehicle tests", () => {
  it("Constructor", () => {
    const input: IVehicle = {
      plate: "ABC1234",
      chassis: "12345678901234567",
      renavam: "12345678901",
      model: "Corolla",
      brand: "Toyota",
      year: 2023,
    };
    const vehicle = new Vehicle(input);
    expect(vehicle.props).toStrictEqual(input);
  });
});
