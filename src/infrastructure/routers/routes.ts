import express, { Request, Response, Router } from "express";
import {
  createOrUpdateVehicleHandler,
  findAllVehiclesHandler,
  deleteVehicleHandler,
} from "../../interfaces/controllers";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    createOrUpdateVehicleHandler(req);
    res
      .status(201)
      .send({ message: "Veículo será adicionado em nossa base de dados" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro ao adicionar o veículo" });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const result = await findAllVehiclesHandler();
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro ao listar os veículos" });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    createOrUpdateVehicleHandler(req);
    res
      .status(200)
      .send({ message: "Veículo será atualizado em nossa base de dados" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro ao adicionar o veículo" });
  }
});

router.delete("/:chassis", async (req: Request, res: Response) => {
  try {
    await deleteVehicleHandler(req);
    res
      .status(200)
      .send({ message: "Veículo será deletado de nossa base de dados" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro ao deletar o veículo" });
  }
});

export default router;
