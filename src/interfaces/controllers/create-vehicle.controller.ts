import { Request } from "express";
import { PgVehicleRepository } from "../../infrastructure/database/database.repository";
import { CreateVehicle } from "../../use-cases/create-vehicle.use-case";

export async function createVehicleHandler(req: Request): Promise<void> {
  const input: IVehicle = req.body as IVehicle;

  const vehicleRepository = new PgVehicleRepository();
  const createVehicle = new CreateVehicle(vehicleRepository);

  try {
    return await createVehicle.execute(input);
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao adicionar veículo");
  }
}
