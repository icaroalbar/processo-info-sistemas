import { Request } from "express";
import { PgVehicleRepository } from "../../infrastructure/database/database.repository";
import { DeleteVehicle } from "../../use-cases/delete-vehicle.use-case";

export async function deleteVehicleHandler(req: Request): Promise<void> {
  const input = {
    chassis: String(req.params.chassis),
  };
  const vehicleRepository = new PgVehicleRepository();
  const deleteVehicle = new DeleteVehicle(vehicleRepository);

  try {
    return await deleteVehicle.execute(input.chassis);
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao deletar veículo");
  }
}
