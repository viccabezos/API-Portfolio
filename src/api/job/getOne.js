const prisma = require('../../../prisma/prismaClient');

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const jobs = await prisma.job.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

module.exports = getOne;
