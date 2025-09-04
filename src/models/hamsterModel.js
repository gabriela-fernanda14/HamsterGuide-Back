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

}

export default new hamsterModel();