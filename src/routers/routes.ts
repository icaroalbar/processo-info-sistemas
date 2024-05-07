import express from "express";
import { createVehicleHandler } from "../interfaces/controllers/create-vehicle.controller";

const router = express.Router();

router.post("/", createVehicleHandler);

export default router;
