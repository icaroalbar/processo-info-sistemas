import { PgVehicleRepository } from "../src/db/database.repository";
import { CreateVehicle } from "../src/vehicle.use-case";

describe("Vehicle CRUD", () => {
  it("Create", async () => {
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
});
