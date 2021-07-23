const prisma = require('../../../prisma/prismaClient');

const getCompany = async (req, res, next) => {
  const { id } = req.params;
  try {
    const allCompanies = await prisma.company
      .findUnique({ where: { id } })
      .stacks();
    res.status(200).json(allCompanies);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = getCompany;
