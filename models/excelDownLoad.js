const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const excelDownLoadAction = async params => {
  let telFilter = Prisma.sql``;
  if (params.operating_institution_tel) {
    let tel = Prisma.sql`AND ((LENGTH(${params.operating_institution_tel}) > 0) AND (centers.operating_institution_tel LIKE CONCAT('%', ${params.operating_institution_tel},'%')))`;
    telFilter = Prisma.sql`${tel}`;
  }
  let repFilter = Prisma.sql``;
  if (params.operating_institution_rep) {
    let rep = Prisma.sql`AND ((LENGTH(${params.operating_institution_rep}) > 0) AND (centers.operating_institution_rep LIKE CONCAT('%', ${params.operating_institution_rep},'%')))`;
    repFilter = Prisma.sql`${rep}`;
  }
  let nameFilter = Prisma.sql``;
  if (params.center_name) {
    let name = Prisma.sql`AND ((LENGTH(${params.center_name}) > 0) AND (centers.center_name LIKE CONCAT('%', ${params.center_name},'%')))`;
    nameFilter = Prisma.sql`${name}`;
  }
  let typeFilter = Prisma.sql``;
  if (params.center_type) {
    let type = Prisma.sql`AND ((LENGTH(${params.center_type}) > 0) AND (centers.center_type LIKE ${params.center_type}))`;
    typeFilter = Prisma.sql`${type}`;
  }
  let doctorsFilter = Prisma.sql``;
  if (params.doctors) {
    let doctors = Prisma.sql`AND ((LENGTH(${params.doctors}) > 0) AND (centers.doctors >= ${params.doctors}))`;
    doctorsFilter = Prisma.sql`${doctors}`;
  }
  let nursesFilter = Prisma.sql``;
  if (params.nurses) {
    let nurses = Prisma.sql`AND ((LENGTH(${params.nurses}) > 0) AND (centers.nurses >= ${params.nurses}))`;
    nursesFilter = Prisma.sql`${nurses}`;
  }
  let socialWorkersFilter = Prisma.sql``;
  if (params.social_workers) {
    let social_workers = Prisma.sql`AND ((LENGTH(${params.social_workers}) > 0) AND (centers.social_workers >= ${params.social_workers}))`;
    socialWorkersFilter = Prisma.sql`${social_workers}`;
  }
  let query = Prisma.sql`SELECT
  centers.id,
  centers.center_name,
  centers.operating_institution_tel,
  centers.doctors,
  centers.nurses,
  centers.social_workers,
  centers.addres,
  centers.center_type,
  centers.operating_institution_name,
  centers.operating_institution_rep,
  centers.latitude,
  centers.longitude
  FROM centers
  LEFT JOIN regions ON regions.id = centers.region_id
  LEFT JOIN managers ON managers.region_id = regions.id
  WHERE managers.user_id = ${params.user_id} 
  ${telFilter}
  ${repFilter}
  ${nameFilter}
  ${typeFilter}
  ${doctorsFilter}
  ${nursesFilter}
  ${socialWorkersFilter}
  `;
  const data = await prisma.$queryRaw`${query}`;

  return data;
};

module.exports = { excelDownLoadAction };
