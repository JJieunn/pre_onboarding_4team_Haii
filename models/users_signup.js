const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserByAccount = async (account) => {
  return await prisma.$queryRaw`SELECT account FROM users WHERE account = ${account}`
}

const getUserByEmail = async (email) => {
  return await prisma.$queryRaw`SELECT email FROM users WHERE email = ${email}`
}

const getUserIdByPhoneNumber = async (phoneNumber) => {
  return await prisma.$queryRaw`SELECT id FROM users WHERE phone_number = ${phoneNumber}`
}

const getRegionIdByName = async (region) => {
  return await prisma.$queryRaw`SELECT id FROM regions WHERE region = ${region}`
}

const isRepresentativeExists = async () => {
  return await prisma.$queryRaw`SELECT grade FROM users WHERE grade = 1`
}

const createUser = async (name, account, email, hashedPw, phoneNumber, grade, region) => {
  const [create] = await prisma.$transaction([

  prisma.$queryRaw`INSERT INTO users (name, account, email, password, phone_number, grade)
  VALUES (${name}, ${account}, ${email}, ${hashedPw}, ${phoneNumber}, ${grade})`,

  prisma.$queryRaw`INSERT INTO managers (user_id)
  SELECT id FROM users ORDER BY id DESC LIMIT 1`,

  prisma.$queryRaw`UPDATE managers SET
  region_id = 
  (SELECT id FROM regions WHERE region = ${region})
  WHERE user_id = 
  (SELECT id FROM users ORDER BY id DESC LIMIT 1);`,

  ]);
  return [create]; 
}

module.exports = { 
  getUserByAccount,
  getUserByEmail,
  getUserIdByPhoneNumber,
  getRegionIdByName,
  isRepresentativeExists,
  createUser }