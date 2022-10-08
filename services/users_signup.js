const signUpModel = require('../models/users_signup')
/* 
대표 관리자는 모든 데이터를 읽고 쓸 수 있는 권한을 가집니다. grade = 1
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
  region varchar */

const createUser = async (name, account, password, phoneNumber, region) => {
// 정규식 검사, 유효성 검사

// 해당 account 가 존재하는지 검사,

// 해당 phone_number가 존재하는지 검사,


// 해당 account나 password, phone_number가 해당 양식에 맞는가, >> 정규식 검사


// region이 없다면, 대표 관리자가 있는지 없는지 유무에 따라서 다시 생각해볼 문제..


return await signUpModel.createUser(name, account, password, phoneNumber, region)

}


module.exports = { createUser }