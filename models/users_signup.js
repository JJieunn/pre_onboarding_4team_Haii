const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();


/* 
대표 관리자는 모든 데이터를 읽고 쓸 수 있는 권한을 가집니다. grade = 1
- 각 지역별 담당자는 데이터를 조회할 수 있는 권한만을 가집니다. grade = 2 
`name` varchar(255),
  `password` varchar(255),
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


const createUser = async () => {
// 프리즈마로 쿼리
await prisma.$queryRaw`INSERT INTO users () 
VALUES ('${name}', '${account}', '${hashedPw}', '${phone_number}', '${name}')`;

// insert managers에 select로 users account로 id 조회한 것과 region 기준으로 region id 알아온 것 넣어야.
// insert into select 구문 사용

const [userId] = 
await prisma.$queryRaw`INSERT INTO managers () 
VALUES ('${name}', '${account}', '${hashedPw}', '${phone_number}', '${name}')`;

await prisma.$queryRaw`INSERT INTO users () 
VALUES ('${name}', '${account}', '${hashedPw}', '${phone_number}', '${name}')`;

}


module.exports = { createUser }