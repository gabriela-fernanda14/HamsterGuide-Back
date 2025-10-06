import prisma from "../../prisma/prisma.js";

class hamsterModel {

  async findAll() {
    const hamsters = await prisma.hamster.findMany({});
    return hamsters;
  }

  async findById(id) {
    const hamster = await prisma.hamster.findUnique({
      where: {
        id: Number(id),
      },
    });
    return hamster;
  }

  async create(hamster){
    const newHamster = await prisma.hamster.create({
      data: hamster,
    });
    return newHamster;
  }

  async createMany(hamsters) {
    const newHamsters = await prisma.hamster.createMany({
      data: hamsters,
    });
    return newHamsters;
  }

  async update(id, hamster) {
    const updatedHamster = await prisma.hamster.update({
      where: { id: Number(id) },
      data: hamster,
    });
    return updatedHamster;
  }

  async delete(id) {
    const deletedHamster = await prisma.hamster.delete({
      where: { id: Number(id) },
    });
  
    return deletedHamster;
  }
}

export default new hamsterModel();