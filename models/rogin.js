const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserByEmail(email) {
  const [existingUser] = await prisma.$queryRaw`
  SELECT * FROM users WHERE email=${email}; 
`;
  return existingUser;
}
// const readUserByEmail = async email => {
//   return await prisma.users.findUnique({ where: { email } });
// };

module.exports = {
  getUserByEmail,
};
