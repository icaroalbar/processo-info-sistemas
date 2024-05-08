import { PgVehicleRepository } from "../../src/infrastructure/database/database.repository";
import { CreateVehicle } from "../../src/use-cases/create-vehicle.use-case";
import { DeleteVehicle } from "../../src/use-cases/delete-vehicle.use-case";
import { FindAllVehicles } from "../../src/use-cases/find-all-vehicles.use-case";
import { UpdateVehicle } from "../../src/use-cases/update-vehicle.use-case";

describe("Vehicle CRUD", () => {
  const input: IVehicle = {
    plate: "ABC1D23",
    chassis: "9BWHE21JX24060961",
    renavam: "00123456789",
    model: "corolla",
    brand: "toyota",
    year: 2023,
  };

  it("Create vehicle", async () => {
    const vehicleRepository = new PgVehicleRepository();
    const createVehicle = new CreateVehicle(vehicleRepository);
    const result = await createVehicle.execute(input);
    expect(result).resolves.not.toThrow;
  });

  it("Find All vehicles", async () => {
    const vehicleRepository = new PgVehicleRepository();
    const createVehicle = new FindAllVehicles(vehicleRepository);
    const result = await createVehicle.execute();
    expect(Array.isArray(result)).toBe(true);
    result.forEach((vehicle: IVehicle) => {
      expect(vehicle).toHaveProperty("plate");
      expect(vehicle).toHaveProperty("chassis");
      expect(vehicle).toHaveProperty("renavam");
      expect(vehicle).toHaveProperty("model");
      expect(vehicle).toHaveProperty("brand");
      expect(vehicle).toHaveProperty("year");
    });
  });

  it("Update vehicle", async () => {
    const input: IVehicle = {
      plate: "ABC1D23",
      chassis: "9BWHE21JX24060961",
      renavam: "00123456789",
      model: "chevrolet",
      brand: "corsa",
      year: 2022,
    };
    const vehicleRepository = new PgVehicleRepository();
    const createVehicle = new UpdateVehicle(vehicleRepository);
    const result = await createVehicle.execute(input);
    expect(result).resolves.not.toThrow;
  });

  afterAll(async () => {
    const vehicleRepository = new PgVehicleRepository();
    const deleteVehicle = new DeleteVehicle(vehicleRepository);
    const result = await deleteVehicle.execute(input.chassis);
    expect(result).resolves.not.toThrow;
  });
});
