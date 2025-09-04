import prisma from "../../prisma/prisma.js";

class hamsterModel {

  async findAll() {
    const hamsters = await prisma.hamster.findMany({
    });

    //console.log(hamster);

    return hamsters;
  }

  // Obter um hamster pelo ID
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

  async update(id, hamster) {
    const updatedTitle = await prisma.hamster.update({
      where: { id: Number(id) },
      data: hamster,
    });

    return updatedTitle;
  }

  async delete(id) {
    const deletedHamster = await prisma.hamster.delete({
      where: { id: Number(id) },
    });
  
    return deletedHamster;
  }
}

export default new hamsterModel();