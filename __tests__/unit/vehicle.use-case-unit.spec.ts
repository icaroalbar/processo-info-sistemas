import { VehicleInMemoryRepository } from "../../src/infrastructure/database/vehicle-in-memory.repository";
import { Vehicle } from "../../src/entities/vehicle.entities";

describe("Vehicle CRUD", () => {
  it("Create", async () => {
    const repository = new VehicleInMemoryRepository();
    const input: IVehicle = {
      plate: "ABC1D23",
      chassis: "9BWHE21JX24060961",
      renavam: "00123456789",
      model: "corolla",
      brand: "toyota",
      year: 2023,
    };
    const vehicle = new Vehicle(input);
    await repository.create(vehicle.props);
    expect(repository.vehicles).toHaveLength(1);
    expect(repository.vehicles).toStrictEqual([input]);
  });

  it("Update", async () => {
    const repository = new VehicleInMemoryRepository();
    const input: IVehicle = {
      plate: "ABC1D23",
      chassis: "9BWHE21JX24060961",
      renavam: "00123456789",
      model: "chevrolet",
      brand: "corsa",
      year: 2022,
    };
    await repository.update(input);
    expect(repository.vehicles).toHaveLength(1);
    expect(repository.vehicles).toStrictEqual([input]);
  });

  it("Find All vehicles", async () => {
    const repository = new VehicleInMemoryRepository();
    await repository.findAll();
    expect(repository.vehicles).toStrictEqual([]);
  });

  it("Delete", async () => {
    const input = {
      chassis: String("9BWHE21JX24060961"),
    };
    const repository = new VehicleInMemoryRepository();
    await repository.delete(input.chassis);
    expect(repository.vehicles).resolves.not.toThrow;
  });
});
