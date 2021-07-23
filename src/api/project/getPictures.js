const prisma = require('../../../prisma/prismaClient');

const getPictures = async (req, res, next) => {
  const { id } = req.params;
  try {
    const allPictures = await prisma.project
      .findUnique({ where: { id } })
      .stacks();
    res.status(200).json(allPictures);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = getPictures;
