const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserByAccount = async account => {
  return await prisma.$queryRaw`SELECT account FROM users WHERE account = ${account}`;
};

const getUserByEmail = async email => {
  return await prisma.$queryRaw`SELECT email FROM users WHERE email = ${email}`;
};

const getUserIdByPhoneNumber = async phoneNumber => {
  return await prisma.$queryRaw`SELECT id FROM users WHERE phone_number = ${phoneNumber}`;
};

const getRegionIdByName = async region => {
  return await prisma.$queryRaw`SELECT id FROM regions WHERE region = ${region}`;
};

const isRepresentativeExists = async () => {
  return await prisma.$queryRaw`SELECT grade FROM users WHERE grade = 1`;
};

const createUser = async (
  name,
  account,
  email,
  hashedPw,
  phoneNumber,
  grade,
  region
) => {
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
};

const readUserByEmail = async email => {
  const [existingUser] = await prisma.users.findMany({
    where: { email },
  });
  return existingUser;
};

const adminCheck = async adminId => {
  return await prisma.$queryRaw`
  select * from users
  where id = ${adminId} AND grade = 1`;
};

const beforeUpdateMgr = async id => {
  return await prisma.$queryRaw`
  SELECT
  users.name,
  users.phone_number,
  regions.region,
  DATE_FORMAT(users.update_at, '%Y-%m-%d') as update_time
  FROM users
  JOIN managers ON managers.user_id = ${id}
  JOIN regions ON regions.id = managers.region_id
  WHERE users.id = ${id}`;
};

const updateMgr = async (id, name, phone_number, region) => {
  await prisma.$queryRaw`
  UPDATE users
  JOIN managers ON managers.user_id = users.id
  SET
  users.name=${name},
  users.phone_number=${phone_number},
  managers.region_id=( SELECT id FROM regions where region=${region})
  WHERE users.id = ${id}`;

  return await prisma.$queryRaw`
  SELECT
  users.name,
  users.phone_number,
  regions.region,
  DATE_FORMAT(users.update_at, '%Y-%m-%d') as update_time
  FROM users
  JOIN regions ON regions.region = ${region}
  WHERE users.id = ${id}`;
};

module.exports = {
  getUserByAccount,
  getUserByEmail,
  getUserIdByPhoneNumber,
  getRegionIdByName,
  isRepresentativeExists,
  createUser,
  readUserByEmail,
  adminCheck,
  beforeUpdateMgr,
  updateMgr,
};
