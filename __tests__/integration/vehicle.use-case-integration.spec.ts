import { PgVehicleRepository } from "../../src/infrastructure/database/database.repository";
import { CreateVehicle } from "../../src/use-cases/create-vehicle.use-case";
import { FindAllVehicles } from "../../src/use-cases/find-all-vehicles.use-case";

describe("Vehicle CRUD", () => {
  it("Create vehicle", async () => {
    const input: IVehicle = {
      plate: "ABC1D23",
      chassis: "9BWHE21JX24060960",
      renavam: "00123456789",
      model: "corolla",
      brand: "toyota",
      year: 2023,
    };
    const vehicleRepository = new PgVehicleRepository();
    const createVehicle = new CreateVehicle(vehicleRepository);
    const result = await createVehicle.execute(input);
    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThan(0);
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
});
