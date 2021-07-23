const prisma = require('../../../prisma/prismaClient');

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const pictures = await prisma.pictures.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(pictures);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

module.exports = getOne;
