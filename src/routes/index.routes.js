import express from "express";

// Importar todas as rotas
import hamsterRouter from "./hamsterRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/hamsters", hamsterRouter);

export default router;