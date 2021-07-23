const prisma = require('../../../prisma/prismaClient');

const getFormation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const allFormations = await prisma.formation
      .findUnique({ where: { id } })
      .stacks();
    res.status(200).json(allFormations);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = getFormation;
