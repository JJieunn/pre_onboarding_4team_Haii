const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const excelDownLoadAction = async (params) => {
  
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
  centers.operating_institution_rep
  FROM centers
  LEFT JOIN regions ON regions.id = centers.region_id
  LEFT JOIN managers ON managers.region_id = regions.id
  WHERE managers.user_id = ${params.user_id} 
  AND (
    ((LENGTH(${params.operating_institution_tel}) > 0) AND (centers.operating_institution_tel LIKE CONCAT('%', ${params.operating_institution_tel},'%')))
    OR ((LENGTH(${params.operating_institution_rep}) > 0) AND (centers.operating_institution_rep LIKE CONCAT('%', ${params.operating_institution_rep},'%')))
    OR ((LENGTH(${params.center_name}) > 0) AND (centers.center_name LIKE CONCAT('%', ${params.center_name},'%')))
    OR ((LENGTH(${params.center_type}) > 0) AND (centers.center_type LIKE CONCAT('%', ${params.center_type},'%')))
    OR ((LENGTH(${params.doctors}) > 0) AND (centers.doctors >= ${params.doctors}))
    OR ((LENGTH(${params.nurses}) > 0) AND (centers.nurses >= ${params.nurses}))
    OR ((LENGTH(${params.social_workers}) > 0) AND (centers.social_workers >= ${params.social_workers}))
    )`;

  const data = await prisma.$queryRaw`${query}`;

  return data;
}

module.exports = { excelDownLoadAction }
