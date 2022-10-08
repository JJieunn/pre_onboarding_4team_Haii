const signUpService = require('../services/users_signup')


/* 
- 이름, 아이디, 패스워드, 전화번호, 담당 지역을 파라미터로 받아 대표 관리자와 지역별 담당자를 ‘유저' 테이블에 생성합니다. 단, 대표 관리자는 특정 담당 지역을 가지고 있지 않습니다.
- 대표 관리자는 모든 데이터를 읽고 쓸 수 있는 권한을 가집니다. grade = 1
- 각 지역별 담당자는 데이터를 조회할 수 있는 권한만을 가집니다. grade = 2 
`name` varchar(255),
  `password` varchar(255),
  `email` varchar(255),
  `phone_number` varchar(255),
  `account` varchar(255),
  `grade` int  // 대표관리자 = 1

  CREATE TABLE `managers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `region_id` INT,

  regions
  id int
  region varchar
*/

const createUser = async (req, res) => {
  // 유효성 검사
  const { name, account, password, phoneNumber, region } = req.body;

  if(!(name && account && password && phoneNumber)) {
    res.status(400).json({ message: "제대로 입력해주세요." }) // 해당 키 값에 따른 에러로 바꿀까 말까...
  }

  
  try {
    await signUpService.createUser(name, account, password, phoneNumber, region)
    res.status(200).json({ message: "회원가입에 성공했습니다." })
  } catch (err) {
    console.log(err)
    res.status( err.statusCode || 500 ).json({ err: err.message })
  }
}



module.exports = { createUser }