const prisma = require('../../../prisma/prismaClient');

const post = async (req, res, next) => {
  const {
    name,
    description,
    startDate,
    endDate,
    schoolName,
    country,
    level,
    projects,
    pictures,
  } = req.body;
  try {
    const createdformation = await prisma.formation.create({
      data: {
        name,
        description,
        startDate,
        endDate,
        schoolName,
        country,
        level,
        projects,
        pictures,
      },
    });

    res.status(201).json(createdformation);
  } catch (error) {
    //  TODO : send to error middleware
    next(error);
  }
};

module.exports = post;
