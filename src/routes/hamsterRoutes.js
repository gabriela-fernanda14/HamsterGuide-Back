import express from "express";
import HamsterController from "../controllers/hamsterController.js";

const hamsterRouter = express.Router();

// Rotas de hamsters

//Listar todos os hamsters
hamsterRouter.get("/", HamsterController.getAllHamsters);

//Obter um hamster pelo ID
hamsterRouter.get("/:id", HamsterController.getHamsterById);


export default hamsterRouter;