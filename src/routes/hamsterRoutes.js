import express from "express";
import HamsterController from "../controllers/hamsterController.js";

const hamsterRouter = express.Router();

// Rotas de hamsters

//Listar todos os hamsters
hamsterRouter.get("/", HamsterController.getAllHamsters);

//Obter um hamster pelo ID
hamsterRouter.get("/:id", HamsterController.getHamsterById);

//Criar um novo hamster
hamsterRouter.post("/", HamsterController.createHamster);

//Atualizar um hamster pelo ID
hamsterRouter.put("/:id", HamsterController.updateHamster);

export default hamsterRouter;