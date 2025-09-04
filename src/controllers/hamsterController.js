import HamsterModel from "../models/hamsterModel.js";

class HamsterController {

  async getAllHamsters(req, res) {
    try {
      const hamsters = await HamsterModel.findAll();
      res.json(hamsters);
    } catch (error) {
      console.error("Erro ao buscar hamsters:", error);
      res.status(500).json({ error: "Erro ao buscar hamsters" });
    }
  }

  async getHamsterById(req, res) {
    try {
      const { id } = req.params;

      const titulo = await HamsterModel.findById(id);

      if (!hamster) {
        return res.status(404).json({ error: "Hamster não encontrado" });
      }

      res.json(hamster);
    } catch (error) {
      console.error("Erro ao buscar hamster:", error);
      res.status(500).json({ error: "Erro ao buscar hamster" });
    }
  }

  async createHamster(req, res) {
      const hamsterData = req.body;

      try {
        if (!hamsterData) {
          return res.status(400).json({ error: "Todos os dados do hamster são obrigatórios" });
        }

        const newHamster = await HamsterModel.create(hamsterData);
        res.status(201).json(newHamster);
      } catch (error) {
        console.error("Erro ao criar hamster:", error);
        res.status(500).json({ error: "Erro ao criar hamster" });
      }
  }

  
}

export default new HamsterController();