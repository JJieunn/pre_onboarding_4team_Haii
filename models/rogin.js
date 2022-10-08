const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserByEmail(email) {
  return await prisma.users.findUnique({ where: { email } });
}

module.exports = {
  getUserByEmail,
};
