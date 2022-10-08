const excelDownLoadService = require("../services/excelDownLoad");

const excelDownLoadAction = async (req, res) => {
  const { token, user_id } = req.headers;
  const { operating_institution_tel, operating_institution_rep, center_name, doctors, nurses, social_workers, center_type } = req.query;

  try {
    const params = { user_id, token, operating_institution_tel, operating_institution_rep, center_name, doctors, nurses, social_workers, center_type }

    const data = await excelDownLoadService.excelDownLoadAction(params);

    return res.status(201).json({ message: 'success', data: data });
  } catch (err) {
    return res.status(err.status || 500).json(err.message);
  }
}

module.exports = { excelDownLoadAction }