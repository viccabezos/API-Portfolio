const prisma = require('../../../prisma/prismaClient');

const getAll = async (req, res, next) => {
  try {
    const companies = await prisma.company.findMany();
    res.setHeader('X-Total-Count', companies.length);
    res.set({
      'X-Total-Count': companies.length,
      'Access-Control-Expose-Headers': 'X-Total-Count',
    });
    res.status(200).json(companies);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
