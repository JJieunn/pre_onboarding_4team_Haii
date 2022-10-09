const excelDownLoadDao = require('../models/excelDownLoad');
const jwt = require('jsonwebtoken');

const excelDownLoadAction = async params => {
  const user_id = jwt.verify(params.token, 'SecretKey').id;
  params['user_id'] = user_id;

  const excelData = await excelDownLoadDao.excelDownLoadAction(params);
  return excelData;
};

module.exports = { excelDownLoadAction };
