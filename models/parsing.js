const { PrismaClient, Prisma } = require('@Prisma/client');
const prisma = new PrismaClient();

const inputRegionData = async(regionArr) => {
  return await prisma.$queryRaw
  `
  INSERT IGNORE INTO regions
  
  VALUES (NULL, ${regionArr})
  `
};

const inputCenterData = async(
  center_name,
  operating_institution_tel,
  doctors,
  nurses,
  social_workers,
  address,
  center_type,
  operating_institution_name,
  operating_institution_rep,
  latitude,
  longitude,
  region
) => {
  return await prisma.$queryRaw`
  INSERT IGNORE centers (
    center_name, operating_institution_tel, doctors,nurses, social_workers, address, center_type, operating_institution_name,operating_institution_rep, latitude, longitude, region_id)
  VALUES (
    ${center_name},
    ${operating_institution_tel},
    ${doctors},
    ${nurses},
    ${social_workers},
    ${address},
    ${center_type},
    ${operating_institution_name},
    ${operating_institution_rep},
    ${latitude},
    ${longitude},
    (SELECT id FROM regions WHERE region LIKE ${region})
  )
  `
};



module.exports = { inputCenterData, inputRegionData }