import { PgVehicleRepository } from "../../infrastructure/database/database.repository";
import { FindAllVehicles } from "../../use-cases/find-all-vehicles.use-case";

export async function findAllVehiclesHandler(): Promise<any> {
  const vehicleRepository = new PgVehicleRepository();
  const findAllVehicles = new FindAllVehicles(vehicleRepository);

  try {
    return await findAllVehicles.execute();
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao listar os veículos");
  }
}
