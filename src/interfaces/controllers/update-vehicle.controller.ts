import { Request } from "express";
import { PgVehicleRepository } from "../../infrastructure/database/database.repository";
import { UpdateVehicle } from "../../use-cases/update-vehicle.use-case";

export async function updateVehicleHandler(req: Request): Promise<void> {
  const input: IVehicle = req.body as IVehicle;

  const vehicleRepository = new PgVehicleRepository();
  const createVehicle = new UpdateVehicle(vehicleRepository);

  try {
    return await createVehicle.execute(input);
  } catch (error) {
    console.error(error);
    throw new Error("Houve algum erro");
  }
}
