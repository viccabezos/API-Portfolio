const prisma = require('../../../prisma/prismaClient');

const getAll = async (req, res, next) => {
  try {
    const stacks = await prisma.stack.findMany();
    res.setHeader('X-Total-Count', stacks.length);
    res.set({
      'X-Total-Count': stacks.length,
      'Access-Control-Expose-Headers': 'X-Total-Count',
    });
    res.status(200).json(stacks);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
