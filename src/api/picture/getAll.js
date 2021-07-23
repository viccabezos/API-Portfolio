const prisma = require('../../../prisma/prismaClient');

const getAll = async (req, res, next) => {
  try {
    const pictures = await prisma.pictures.findMany();
    res.setHeader('X-Total-Count', pictures.length);
    res.set({
      'X-Total-Count': pictures.length,
      'Access-Control-Expose-Headers': 'X-Total-Count',
    });
    res.status(200).json(pictures);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
