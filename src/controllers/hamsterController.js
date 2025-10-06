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

      if (!id) {
        return res.status(400).json({ error: "ID é obrigatório" });
      }

      if (isNaN(Number(id))) {
        return res.status(400).json({ error: "ID deve ser um número válido" });
      }

      const hamster = await HamsterModel.findById(id);

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

        if (isNaN(Number(hamsterData.weight))) {
          return res.status(400).json({ error: "O peso deve ser em número (gramas)" });
        }

        const newHamster = await HamsterModel.create(hamsterData);
        res.status(201).json(newHamster);
      } catch (error) {
        console.error("Erro ao criar hamster:", error);
        res.status(500).json({ error: "Erro ao criar hamster" });
      }
  }

  async createManyHamsters(req, res) {
    const hamstersData = req.body;
    try {
      if (!Array.isArray(hamstersData) || hamstersData.length === 0) {
        return res.status(400).json({ error: "Um array de dados de hamsters é obrigatório" });
      }
      const newHamsters = await HamsterModel.createMany(hamstersData);
      res.status(201).json(newHamsters);
    } catch (error) {
      console.error("Erro ao criar hamsters:", error);
      res.status(500).json({ error: "Erro ao criar hamsters" });
    }
  }

  async updateHamster(req, res) {
    const { id } = req.params;
    const hamsterData = req.body;

    try {
      if (!id) {
        return res.status(400).json({ error: "ID é obrigatório" });
      }

      if (isNaN(Number(id))) {
        return res.status(400).json({ error: "ID deve ser um número válido" });
      }

      if (!hamsterData) {
        return res.status(400).json({ error: "Todos os dados do hamster são obrigatórios" });
      }

      if (isNaN(Number(hamsterData.weight))) {
        return res.status(400).json({ error: "O peso deve ser em número" });
      }

      const updatedHamster = await HamsterModel.update(id, hamsterData);
      res.json(updatedHamster);
    } catch (error) {
      console.error("Erro ao atualizar hamster:", error);
      res.status(500).json({ error: "Erro ao atualizar hamster" });
    }
  }
  
  async deleteHamster(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({ error: "ID é obrigatório" });
      }

      if (isNaN(Number(id))) {
        return res.status(400).json({ error: "ID deve ser um número válido" });
      }

      await HamsterModel.delete(id);
      res.status(200).json({ message: "Hamster deletado com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar hamster:", error);
      res.status(500).json({ error: "Erro ao deletar hamster" });
    }
  }
}

export default new HamsterController();