const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserByEmail = async email => {
  const [existingUser] = await prisma.users.findMany({
    where: { email },
  });
  return existingUser;
};

module.exports = {
  getUserByEmail,
};
