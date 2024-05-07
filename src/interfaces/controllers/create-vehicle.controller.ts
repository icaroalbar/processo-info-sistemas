import { Request, Response } from "express";
import { PgVehicleRepository } from "../../infrastructure/database/database.repository";
import { CreateVehicle } from "../../use-cases/create-vehicle.use-case";

export async function createVehicleHandler(
  request: Request,
  reply: Response
): Promise<void> {
  const input: IVehicle = request.body as IVehicle;

  const vehicleRepository = new PgVehicleRepository();
  const createVehicle = new CreateVehicle(vehicleRepository);

  try {
    const newVehicleId = await createVehicle.execute(input);
    reply.status(201).send({ id: newVehicleId });
  } catch (error) {
    console.error("Erro ao adicionar veículo:", error);
    reply.status(500).send({ error: "Erro ao adicionar veículo" });
  }
}
