const prisma = require('../../../prisma/prismaClient');

const getAll = async (req, res, next) => {
  try {
    const formations = await prisma.formation.findMany();
    res.setHeader('X-Total-Count', formations.length);
    res.set({
      'X-Total-Count': formations.length,
      'Access-Control-Expose-Headers': 'X-Total-Count',
    });
    res.status(200).json(formations);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
