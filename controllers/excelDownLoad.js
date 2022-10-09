const excelDownLoadService = require('../services/excelDownLoad');
const Excel = require('exceljs');

const excelDownLoadAction = async (req, res) => {
  const { token } = req.headers;
  const {
    operating_institution_tel,
    operating_institution_rep,
    center_name,
    doctors,
    nurses,
    social_workers,
    center_type,
  } = req.query;

  try {
    const params = {
      token,
      operating_institution_tel,
      operating_institution_rep,
      center_name,
      doctors,
      nurses,
      social_workers,
      center_type,
    };

    const data = await excelDownLoadService.excelDownLoadAction(params);

    const workbook = new Excel.Workbook();
    const sheetOne = workbook.addWorksheet('Haii');

    sheetOne.columns = [
      { header: '치매센터명', key: 'center_name' },
      { header: '치매센터유형', key: 'center_type' },
      { header: '소재지도로명주소', key: 'addres' },
      { header: '운영기관전화번호', key: 'operating_institution_tel' },
      { header: '운영기관명', key: 'operating_institution_name' },
      { header: '운영기관대표자명', key: 'operating_institution_rep' },
      { header: '의사인원수', key: 'doctors' },
      { header: '간호사인원수', key: 'nurses' },
      { header: '사회복지사인원수', key: 'social_workers' },
    ];
    data.map((el, idx) => {
      sheetOne.insertRow(idx + 2, el);
    });

    // 5. 다운로드 받기
    workbook.xlsx.writeFile('./Haii.xlsx');

    return res.status(201).json({ message: 'success', data: data });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err.message);
  }
};

module.exports = { excelDownLoadAction };
