const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const adminCheck = async (adminId) => {
  return await prisma.$queryRaw`
  select * from users
  where id = ${adminId} AND grade = 1`
}

const beforeUpdateMgr = async (id) => {
  return await prisma.$queryRaw`
  SELECT
  users.name,
  users.phone_number,
  regions.region,
  DATE_FORMAT(users.update_at, '%Y-%m-%d') as update_time
  FROM users
  JOIN managers ON managers.user_id = ${id}
  JOIN regions ON regions.id = managers.region_id
  WHERE users.id = ${id}`
}

const updateMgr = async (id, name, phone_number, region) => {

  await prisma.$queryRaw`
  UPDATE users
  JOIN managers ON managers.user_id = users.id
  SET
  users.name=${name},
  users.phone_number=${phone_number},
  managers.region_id=( SELECT id FROM regions where region=${region})
  WHERE users.id = ${id}`

  return await prisma.$queryRaw`
  SELECT
  users.name,
  users.phone_number,
  regions.region,
  DATE_FORMAT(users.update_at, '%Y-%m-%d') as update_time
  FROM users
  JOIN regions ON regions.region = ${region}
  WHERE users.id = ${id}`
}

module.exports = { adminCheck, beforeUpdateMgr, updateMgr }