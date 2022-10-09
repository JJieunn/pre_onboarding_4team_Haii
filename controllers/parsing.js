const parsingService = require('../services/parsing')
const parsingData = require('../center_data.json')


const parsingDatas = async (req, res) => {
	const {token} = req.headers;
	const data = parsingData.records;
	try{
		for ( i=0; i<data.length; i++) {
			let regionArr = parsingData.records[i].소재지도로명주소.split(" ");
			switch(regionArr[0]){        
				case "서울특별시":
					regionArr = "서울특별시";
					break;
				case "경기도":
					regionArr = "경기도";
					break;
				case "인천광역시":
					regionArr = "인천광역시";
					break;
				case "강원도":
					regionArr = "강원도";
					break;
				case "충청남도":
					regionArr = "충청남도";
					break;
				case "충청북도":
					regionArr = "충청북도";
					break;
				case "대전광역시":
					regionArr = "대전광역시";
					break;
				case "경상북도":
					regionArr = "경상북도";
					break;
				case "경상남도":
					regionArr = "경상남도";
					break;
				case "전라북도":
					regionArr = "전라북도";
					break;
				case "전라남도":
					regionArr = "전라남도";
					break;
				case "부산광역시":
					regionArr = "부산광역시";
					break;
				case "울산광역시":
					regionArr = "울산광역시";
					break;
				case "대구광역시":
					regionArr = "대구광역시";
					break;
				case "광주광역시":
					regionArr = "광주광역시";
					break;
				case "세종특별자치시":
					regionArr = "세종특별자치시";
					break;
				case "제주특별자치도":
					regionArr = "제주특별자치도";
					break;
			}
			const parsingRegionData = await parsingService.parsingRegion(regionArr, token);
		};

		for ( i=0; i<data.length; i++) {
			const center_name = parsingData.records[i].치매센터명;
			const operating_institution_tel = parsingData.records[i].운영기관전화번호;
			const doctors = parsingData.records[i].의사인원수;
			const nurses = parsingData.records[i].간호사인원수;
			const social_workers = parsingData.records[i].사회복지사인원수;
			const address = parsingData.records[i].소재지도로명주소;
			const center_type = parsingData.records[i].치매센터유형;
			const operating_institution_name = parsingData.records[i].운영기관명;
			const operating_institution_rep = parsingData.records[i].운영기관대표자명;
			const latitude = parsingData.records[i].위도;
			const longitude = parsingData.records[i].경도;
			const region = parsingData.records[i].소재지도로명주소.split(" ")[0];

			const parsingCenterData = await parsingService.parsingCenter(center_name,operating_institution_tel,doctors,nurses,social_workers,address,center_type,operating_institution_name,operating_institution_rep,latitude,longitude,region);
		}

		res.status(200).json({message: "data parsing success"})
	} catch (err) {
		res.status(err.statusCode || 500).json({ err: err.message });
	}};
module.exports = { parsingDatas };