const dataDao = require('../models/parsing')
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const parsingRegion = async (regionArr, token) => {
  const user_id = jwt.verify(token, SECRET_KEY).id;
  const [checkGrade] = await dataDao.checkGrade(user_id)
  if (checkGrade["grade"] == 1) {
    const parsingRegionData = await dataDao.inputRegionData(regionArr, user_id);
    return parsingRegionData;
  } else {
    const error = new Error('you are not a representative manager');
    error.statusCode = 400;
    throw error;
  };
  };

// const parsingRegion = async(regionArr) => {
//   const parsingRegionData = await dataDao.inputRegionData(regionArr);
//   return parsingRegionData;
// }

const parsingCenter = async(
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
  const parsingCenterData = await dataDao.inputCenterData(
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
  );
  return parsingCenterData;
}

module.exports = { parsingCenter,parsingRegion }