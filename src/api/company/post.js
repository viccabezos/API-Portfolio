const prisma = require('../../../prisma/prismaClient');

const post = async (req, res, next) => {
  const { name, url, linkedin, jobs } = req.body;
  try {
    const createdcompany = await prisma.company.create({
      data: {
        name,
        url,
        linkedin,
        jobs,
      },
    });

    res.status(201).json(createdcompany);
  } catch (error) {
    //  TODO : send to error middleware
    next(error);
  }
};

module.exports = post;
