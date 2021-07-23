const prisma = require('../../../prisma/prismaClient');

const getStacks = async (req, res, next) => {
  const { id } = req.params;
  try {
    const allStacks = await prisma.project
      .findUnique({ where: { id } })
      .stacks();
    res.status(200).json(allStacks);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = getStacks;
