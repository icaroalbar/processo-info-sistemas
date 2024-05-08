import express, { Request, Response, Router } from "express";
import {
  createVehicleHandler,
  findAllVehiclesHandler,
} from "../../interfaces/controllers";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    await createVehicleHandler(req);
    res.status(201).send({ message: "Veículo adicionado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro ao listar os veículos" });
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

router.delete("/:chassis", async (req: Request, res: Response) => {
  const chassi = req.params;
  try {
    const result = await deleteVehiclesHandler(chassi);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro ao listar os veículos" });
  }
});

export default router;
