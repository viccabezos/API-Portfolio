const prisma = require('../../../prisma/prismaClient');

const getAll = async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany();
    res.setHeader('X-Total-Count', projects.length);
    res.set({
      'X-Total-Count': projects.length,
      'Access-Control-Expose-Headers': 'X-Total-Count',
    });
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
