const excelDownLoadDao = require('../models/excelDownLoad');
const jwt = require('jsonwebtoken');

const excelDownLoadAction = async params => {
  // const user_id = jwt.verify(token, 'SecretKey').id;
  // params[user_id] = user_id;
  if (
    !(
      params.operating_institution_tel ||
      params.operating_institution_rep ||
      params.center_name ||
      params.doctors ||
      params.nurses ||
      params.social_workers ||
      params.center_type
    )
  ) {
    const excelData = await excelDownLoadDao.excelDownLoadAction(
      params.user_id
    );
    return excelData;
  } else {
    const excelData = await excelDownLoadDao.excelDownLoadActionWithFiltering(
      params
    );
    return excelData;
  }
};

module.exports = { excelDownLoadAction };
