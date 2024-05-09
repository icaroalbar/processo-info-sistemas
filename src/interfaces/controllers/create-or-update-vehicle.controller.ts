import { Request } from "express";
import { PgVehicleRepository } from "../../infrastructure/database/database.repository";
import { CreateVehicle, UpdateVehicle } from "../../use-cases";

export async function createOrUpdateVehicleHandler(
  req: Request
): Promise<void> {
  const input: IVehicle = req.body as IVehicle;

  const vehicleRepository = new PgVehicleRepository();

  let result: any;

  console.log(req.method);

  if (req.method === "POST") {
    result = new CreateVehicle(vehicleRepository);
  }
  if (req.method === "PATCH") {
    result = new UpdateVehicle(vehicleRepository);
  }

  await result.execute(input);
}
