const excelDownLoadDao = require("../models/excelDownLoad");
const jwt = require('jsonwebtoken');

const excelDownLoadAction = async (params) => {
  // const user_id = jwt.verify(token, 'secretKey').id;
  // 사용자 아이디 시크릿키값 뭔지 알아야 함

  return await excelDownLoadDao.excelDownLoadAction(params);
}

module.exports = { excelDownLoadAction }