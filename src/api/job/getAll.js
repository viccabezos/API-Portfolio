const prisma = require('../../../prisma/prismaClient');

const getAll = async (req, res, next) => {
  try {
    const jobs = await prisma.job.findMany();
    res.setHeader('X-Total-Count', jobs.length);
    res.set({
      'X-Total-Count': jobs.length,
      'Access-Control-Expose-Headers': 'X-Total-Count',
    });
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
