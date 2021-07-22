const prisma = require('../../../prisma/prismaClient');

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const stacks = await prisma.stack.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(stacks);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

module.exports = getOne;
