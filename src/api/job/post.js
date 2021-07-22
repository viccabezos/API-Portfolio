const prisma = require('../../../prisma/prismaClient');

const post = async (req, res, next) => {
  const {
    name,
    description,
    startDate,
    endDate,
    schoolName,
    company,
    companyId,
    projects,
  } = req.body;
  try {
    const createdjob = await prisma.job.create({
      data: {
        name,
        description,
        startDate,
        endDate,
        schoolName,
        company,
        companyId,
        projects,
      },
    });

    res.status(201).json(createdjob);
  } catch (error) {
    //  TODO : send to error middleware
    next(error);
  }
};

module.exports = post;
