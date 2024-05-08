import { Request } from "express";
import { PgVehicleRepository } from "../../infrastructure/database/database.repository";
import { CreateVehicle, UpdateVehicle } from "../../use-cases";

export async function createOrUpdateVehicleHandler(
  req: Request
): Promise<void> {
  const input: IVehicle = req.body as IVehicle;

  const vehicleRepository = new PgVehicleRepository();
  if (req.method === "POST") {
    const createVehicle = new CreateVehicle(vehicleRepository);
    return await createVehicle.execute(input);
  }

  if (req.method === "PATCH") {
    const createVehicle = new UpdateVehicle(vehicleRepository);
    return await createVehicle.execute(input);
  }

  try {
  } catch (error) {
    console.error(error);
    throw new Error("Houve algum erro");
  }
}
