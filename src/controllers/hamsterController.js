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
  
}

export default new HamsterController();