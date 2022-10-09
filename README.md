# Haii_API

## 📌 개요
- 전국치매센터표준데이터 JSON 데이터 파일을 데이터베이스에 저장하고 필요에 따라 각 지역별 담당자들이 해당 지역에 속하는 데이터만을 조회하여 엑셀 파일로 다운로드 할 수 있는 Admin용 데이터 관리 프로그램입니다.


## 📌 구현 기능
```
1. 회원가입 기능
- 필수 구현
  - 이름, 아이디, 패스워드, 전화번호, 담당 지역을 파라미터로 받아 대표 관리자와 지역별 담당자를 ‘유저' 테이블에 생성합니다. 단, 대표 관리자는 특정 담당 지역을 가지고 있지 않습니다.
  - 대표 관리자는 모든 데이터를 읽고 쓸 수 있는 권한을 가집니다.
  - 각 지역별 담당자는 데이터를 조회할 수 있는 권한만을 가집니다.

2. 로그인 기능
- 필수 구현
  - 대표 관리자와 지역별 담당자는 회원가입 시 작성한 아이디와 패스워드를 가지고 로그인을 할 수 있습니다.
  - JWT 인증방식을 사용하여 사용자 인증을 처리합니다.
  - 유효한 토큰값인지 검증해야 합니다.
- 선택 구현 (가산점)
  - 토큰이 만료되면 재발급을 받습니다. 인증을 진행하지 않고 재발급 받기 위해 Refresh-Token을 생성해보세요.

3. 회원 정보 수정 기능
- 필수 구현
  - 대표 관리자는 자신 또는 지역별 담당자의 이름, 전화번호, 담당 지역을 수정할 수 있습니다.단, 대표 관리자는 특정 담당 지역을 가지고 있지 않습니다.
- 선택 구현 (가산점)
  - 데이터베이스에서 업데이트된 시점을 알 수 있도록 컬럼을 추가합니다.

4. 회원 정보 수정 기능
- 필수 구현
  - 대표 관리자는 자신 또는 지역별 담당자의 이름, 전화번호, 담당 지역을 수정할 수 있습니다.단, 대표 관리자는 특정 담당 지역을 가지고 있지 않습니다.
- 선택 구현 (가산점)
  - 데이터베이스에서 업데이트된 시점을 알 수 있도록 컬럼을 추가합니다.

5. JSON 데이터 파싱 후, 데이터베이스 저장
- 필수 구현
  - 대표 관리자가 ‘치매센터’ 테이블에 각 치매센터에 대한 상세 데이터를 저장합니다.
- 선택 구현 (가산점)
  - ‘치매센터’ 테이블에 모든 데이터를 넣을 필요는 없습니다. 각 지역별 담당자들은 담당자가 속한 지역에 대한 데이터만을 조회할 수 있다는 것을 명심하여 인덱스, 릴레이션 등을 고려하여 데이터베이스 스키마를 자유롭게 설계해보세요.

6. 엑셀 다운로드 기능
- 필수 구현
  - 각 지역별 담당자는 해당 지역에 대한 데이터만을 조회하여 엑셀 파일로 다운로드받을 수 있어야 하며, 이때 해당 지역은 ‘시/도’ 단위로 구분됩니다.
  - 엑셀 컬럼 명은 JSON 데이터 필드명과 동일해야 합니다.
- 선택 구현 (가산점)
  - 아래의 조회 조건을 추가합니다.
  - ‘치매센터명', ‘운영기관대표자명', ‘운영기관전화번호': 단어 부분 검색 가능
  - ‘치매센터유형': 모든 단어 일치
  - ‘의사인원수’, ‘간호사인원수', ‘사회복지사인원수': 일정 숫자 이상 검색 가능
```

    
## 📌 적용 기술

- 사용언어 : `Javascript`
- 런타임 환경 : `Node.js`
- 프레임워크 : `Express`
- 데이터베이스 : `Mysql`
- API Docs : `Swagger`

## 실행방법
- MySQL, Git이 미리 설치되어야합니다.

### 1.해당 레포지토리를 clone합니다.

```
git clone https://github.com/AhnSang0915/pre_onboarding_4team_Haii
```

### 2. 다운 받으신 폴더로 들어갑니다

```
cd pre_onboarding_4team_Haii
```

### 3. 의존성들을 설치합니다.

```
npm i
```

### 4. 실행시킵니다!

```
npm start
```

### 📌 DB 모델링
<img width="958" alt="스크린샷 2022-10-09 오후 10 17 01" src="https://user-images.githubusercontent.com/68211978/194759127-654beda6-cd2f-45c3-85c1-652d6870ddb0.png">


## 📌 프로젝트 구조
Layered achitecture로 routes - controllers - services - models
```
📦Haii
 ┣ 📂controllers
 ┣ 📂database
 ┣ 📂middleware
 ┣ 📂models
 ┣ 📂modules
 ┣ 📂prisma
 ┣ 📂routes
 ┣ 📂services
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜server.js
```
## 📌 Swagger API
### Swagger 명세서 확인 순서
```
npm start
```
```
http://localhost:8000/api-docs/
```


## 📌 구현 기능 소개 & Swagger API Test 방법
### ✨ 박 지은 - 회원가입 기능
  - 회원가입 기능 설명 : 이름, 아이디, 이메일, 패스워드, 전화번호, 지역 값을 입력 받아 회원 가입하는 API   
    - 이름, 아이디, 이메일, 패스워드, 전화번호, 지역 값은 모두 필수 값입니다.  
    
  - /user/signup 명세서의 try it out을 클릭 후 값을 넣어 Execute 진행  

<img width="1286" alt="image" src="https://user-images.githubusercontent.com/108418225/194779175-b1ba97ec-c999-4c35-8df9-3e6a76ce4e95.png">

<img width="1374" alt="Pasted Graphic 37" src="https://user-images.githubusercontent.com/108418225/194772071-b463036a-4262-4f91-a655-f74c2e89f209.png">

  - 응답 코드  
    - 200 
      - "message": "회원가입 되었습니다."  
    - 400
      - "err": "칸을 제대로 입력해주세요." (입력 키 에러)  
      - "err": "비밀번호 길이를 확인해주세요." (비밀번호 길이 에러)   
      - "err": "이미 있는 계정입니다." (account, email, phoneNumber 중복 에러)   
      - "err": "계정을 확인해주세요." (email 정규표현식 에러)  
      - "err": "비밀번호를 확인해주세요." (password 정규표현식 에러)   
      - "err": "전화번호를 확인해주세요." (phoneNumber 정규표현식 에러)   
      - "err": "이미 대표관리자가 존재합니다." (대표관리자 중복 에러)  
      - "err": "지역이 잘못 입력되었습니다." (지역 값 입력 에러)  
      

  - 정규표현식

    - 회원 email의 경우  
  
      - '@Haii.com'로 된 주소만 가능합니다.  
    
    - 회원 password의 경우  
  
      - 영어 대소문자, 숫자, 특수문자(.!?@#*+)만 가능합니다.   
    
    - 회원 phoneNumber의 경우   
  
      - '-'을 포함하여 총 11자리 번호만 가능합니다. 또한 3-4-4 자리 숫자로만 가능합니다.  
   
   
 - 구현 설명
    - 필요에 따른 에러 처리를 했습니다.(입력 값, 테이블에 없는 지역 값, 정규표현식, 등)
    - password 길이를 8 ~ 16자로 제한을 두었기 때문에, 이 길이를 만족하지 못할 경우 에러 처리를 했습니다.
    - 대표 관리자 관련
      - 대표 관리자임은 region 값을 '대표'라고 입력함으로 가입할 수 있으며, 모든 데이터를 읽고 쓸 수 있는 권한으로 grade 컬럼 값을 1로 부여합니다.
      - 반면에 각 지역별 담당자는 데이터를 조회할 수 있는 권한으로 grade 컬럼 값을 2로 부여합니다.
      - 대표 관리자는 1명만 존재한다고 가정하여 region = '대표'로 값이 들어왔을 때, SQL문을 통해 grade = 1인 회원을 조회한 후, 대표 관리자가 있다면 에러를, 없다면 grade = 1을 할당합니다.
    - 회원 가입에 성공했을 때, 해당 user, region의 id 값으로 managers 테이블에 user_id, region_id 값을 넣어줘야 하므로
      - user_id : users 테이블을 id 기준으로 역순 정렬, limit 1인 값으로 조회하여 먼저 삽입했습니다. 
      - region_id : select문으로 위처럼 조회한 user_id 값을 갖는 row의 region_id 값을 업데이트 하였습니다.
      - 이 과정(users 삽입, managers에 user_id 삽입, region_id를 업데이트하는 SQL문)이 모두 성공 또는 실패로 발생해야한다고 판단하여 transaction을 사용했습니다.
  
  - 기능 구현 시 어려웠던 점과 그에 대한 해결 방안을 모색하기 위해 노력한 점 
    - 정규표현식, transaction, prisma와 swagger 또한 처음 사용하여 시간이 더 걸리고 뜻하는대로 결과가 나오지 않는 점이 힘들었습니다. 공식문서, 여러 기술 블로그와 팀원의 도움을 받아 코드를 작성했습니다. 
    - 코드 길이가 길어지는 것이 쉽지 않았습니다. 반복되는 에러 처리문을 별도의 파일로 빼내어 길이 및 중복을 줄여보았으나 이를 더 개선하기 위해서는 에러 핸들링 및 함수 재사용에 대해 더 공부할 필요가 있다는 것을 느꼈습니다.


### ✨ 최 정훈 - 로그인 기능 및 Swagger init
   - 로그인 기능 설명 : Jsonwebtoken, Bcrypt을 이용하여 token 발행하는 로그인API구현

      - user/login 명세서의 try it out을 클릭 후 값을 넣어 Execute 진행

<img width="1233" alt="image" src="https://user-images.githubusercontent.com/108418225/194779024-2d77e869-a4b4-4203-844e-120befff1c61.png">


<img width="1403" alt="스크린샷 2022-10-09 오후 10 29 03" src="https://user-images.githubusercontent.com/68211978/194759590-bc510e91-f21b-4b06-8275-1b860ced6f7e.png">
   

### ✨ 이 해연 - 회원 정보 수정 기능
  - 회원 정보 수정 기능 설명 : 대표 관리자가 자신 혹은 지역 담당자의 이름, 전화번호, 담당 지역을 수정하는 API 
  
     - /user/update/{mgrId} 명세서의 try it out을 클릭 후 값을 넣어 Execute 진행


<img width="1412" alt="image" src="https://user-images.githubusercontent.com/108418225/194779056-31619a29-ad09-40d6-a4e4-f15072476f6e.png">


<img width="1371" alt="image" src="https://user-images.githubusercontent.com/108418225/194778116-258a5cf4-e85f-47ec-9ec0-87e591755597.png">

  - 구현 설명
  
    - header에 회원의 token 값, path에 수정할 user의 id값, body에 수정할 name, phone_number, region값을 입력 받습니다.
    - 대표 관리자만이 정보를 수정할 수 있으므로 token을 복호화하여 얻은 회원의 id와 grade = 1을 조건으로 한 SELECT문으로 대표 관리자인지 체크합니다.
    - 대표 관리자가 아닌 경우 'Admin 계정만 수정할 수 있습니다'라는 에러 메시지를 반환합니다.
    - 성공적으로 수정하면 수정되기 이전 값과 수정한 이후의 값이 같이 반환됩니다.
    - 업데이트된 날짜가 포함되어 있습니다.



### ✨ 김 현정 - 엑셀 다운로드 기능
  - 데이터 가져오기: 
    - 헤더로 token을 받아와서 복호화 후 user_id를 가져오기
    - 해당 user_id와 query로 받아온 각종 parameter들을 사용해 데이터 추출을 위한 query문 작성
    
### ✨ 안 수철 - 엑셀 다운로드 기능
  - 엑셀 다운로드: 
    - 받아온 데이터를 엑셀으로 다운로드. haii.xlsx 파일 위치는 해당 프로젝트 폴더 내부
    - 컬럼명을 JSON 데이터 필드명과 동일하게 맞춤
  - 데이터 가져오기:
    - 필터링 세부 query문 작성
  
<img width="1127" alt="스크린샷 2022-10-10 오전 4 22 58" src="https://user-images.githubusercontent.com/97499865/194775696-e55dde70-329c-4cdb-b4c1-9a8dc1bf6986.png">

<img width="1136" alt="스크린샷 2022-10-10 오전 4 11 38" src="https://user-images.githubusercontent.com/97499865/194775278-b200d6ab-4017-44cb-b3ed-eae45d11fc3d.png">



### ✨ 안 상현 - JSON 데이터 파싱 후, 데이터베이스 저장
   - 기능 설명 : json데이터를 사용 데이터베이스에 맞게 파싱한 후 데이터 베이스 전송 API 구현
   - 데이터 저장을 위해 치매센터가 저장되어 있는 json파일이 필요합니다.
   
      - parsing 명세서의 try it out을 클릭 후 발급받은 token을 넣어 테스트
      - region값이 "대표"인 유저의 토큰이 대표관리자의 토큰입니다.
<img width="1403" alt="스크린샷 2022-10-10 오후 10 29 03" src="https://user-images.githubusercontent.com/99232122/194769457-cd9ac11a-fcda-4343-bf8b-9e9015c99df3.png">

   - 응답 코드
      - 성공(200) 
        - message: data parsing success
      - 권한 없음(400) 
        - message: you are not a representative manager
      - 토큰이 없을때(401) 
        - message: jwt must be provided
        
   - 구현 설명
     
     - 지역별 관리자를 구분하기 위해 users table에 region을 참조받게 모델링 했습니다.
     - 권한을 확인하기 위해 users table에 token에서 유저의 고유 id로 grade를 확인하는 기능을 사용 했습니다.
     - 반복 요청시 이미 존재하는 데이터가 저장되지 않게 하기 위해 INSERT IGNORE을 사용 했습니다.
       - regions table의 region과 centers table의 latitude, longitude를 unique로 처리해 관리 했습니다.
     - 권한이 없는 token으로 요청이 들어올 경우 데이터에 접근하기 전 에러를 반환했습니다.
 
   - 기능 구현 시 어려웠던 점과 그에 대한 해결 방안을 모색하기 위해 노력한 점
     
     - node.js를 사용한 경험이 부족해 전체적으로 어려웠습니다. 프로젝트의 구조부터 이해하려 했고 구현하는 중에도 javascript의 기본 문법을 찾아보며 구현 했습니다.
     - 데이터 파싱이라는 단어가 생소하여 파싱이 무엇인지 부터 찾아보았습니다.
     - 처음 기능을 기획할때는 json파일을 직접 파싱하는게 아닌 openAPI를 사용해 구현하려고 했지만 openAPI가 승인되지 않아 json파일을 직접 파싱하는 방법을 사용하게 되었습니다.
     - 같은 데이터로 반복 요청시 중복된 데이터저장을 방지하는 로직을 구현하기 위해 테이블 데이터와 비교하는 방법을 생각했지만 검색중 INSERT IGNORE기능을 알게되어 사용해 보았습니다.
     - 토큰에서 받아온 사용자의 고유 아이디로 권한을 확인하는 과정이 어려웠습니다. 팀원에게 도움을 받아 권한을 확인하는 함수를 작성해 해결했습니다.
     - sql문을 사용해본 경험이 적어 기본적인 문법부터 검색해 사용했습니다.
   


## 📌 Commit Convention
```
Feat(Add) : 새로운 기능 추가 
Fix : 버그 수정 
Docs : 문서 수정 
Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 
Refactor: 코드 수정
Test : 테스트 코드, 리펙토링 테스트 코드 추가 
Comment: 필요한 주석 추가 및 변경
Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove: 파일을 삭제하는 작업만 수행하는경우

```
