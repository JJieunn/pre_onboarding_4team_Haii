const { json } = require('express')
const dataDao = require('../models/parsing')


const parsingRegion = async(regionArr) => {
  const parsingRegionData = await dataDao.inputRegionData(regionArr);
  return parsingRegionData;
}

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