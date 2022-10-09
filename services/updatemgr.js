const updateMgrDao = require('../models/updatemgr')

const beforeUpdateMgr = async (mgrId) => {
  return await updateMgrDao.beforeUpdateMgr(mgrId)
}

const updateMgr = async (adminId, mgrId, name, phone_number, region) => {
  const check = await updateMgrDao.adminCheck(adminId)
  if (check.length > 0) {
    return await updateMgrDao.updateMgr(mgrId, name, phone_number, region)
  }
  else {
    const error = new Error("Admin 계정만 수정할 수 있습니다")
    error.statusCode = 400
    throw error
  }
}

module.exports = { beforeUpdateMgr, updateMgr }