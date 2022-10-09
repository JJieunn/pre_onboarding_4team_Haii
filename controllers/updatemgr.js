const updateMgrService = require('../services/updatemgr')

const updateMgr = async (req, res) => {
  const adminId = req.params.adminId;
  const { mgrId, name, phone_number, region } = req.body
  try {
    const Before_update = await updateMgrService.beforeUpdateMgr(mgrId)
    const After_update = await updateMgrService.updateMgr(adminId, mgrId, name, phone_number, region)
    res.status(200).json({ message: "Update SUCCESS", Before_update, After_update })
  }
  catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message)

  }
}

module.exports = { updateMgr }