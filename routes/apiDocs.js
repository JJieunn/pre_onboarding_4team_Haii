// API 명세서
/**
 * @swagger
 * paths:
 *  /user/signup:
 *    post:
 *       summary: 회원 가입
 *       tags:
 *        - Users
 *       description: 이름, 계정, 이메일, 비밀번호, 전화번호, 지역을 입력하여 회원 가입
 *       produces:
 *        - application/json
 *       parameters:
 *         - in: body
 *           name: info
 *           type: string
 *           description : "name, account, email, password, phoneNumber, region"
 *           required: true
 *       responses:
 *        '200':
 *          description: 회원 가입 성공
 *          content:
 *            application/json:
 *             schema:
 *                example:
 *                  {"message": "회원 가입 되었습니다."}
 *        '400-(1)':
 *          description: 입력 값 에러
 *          content:
 *             application/json:
 *              schema:
 *                example:                         
 *                  {"err": "칸을 제대로 입력해주세요."}
 *        '400-(2)':
 *          description: 비밀번호 길이 에러
 *          content:
 *             application/json:
 *              schema:
 *                example:                         
 *                  {"err": "비밀번호 길이를 확인해주세요."}
 *        '400-(3)':
 *          description: 계정(email, 전화번호) 중복 에러
 *          content: 
 *             application/json:
 *              schema:
 *                example:                         
 *                  {"err": "이미 있는 계정입니다."}
 *        '400-(4)':
 *          description: 계정(email) 정규표현식 에러
 *          content:
 *             application/json:
 *              schema:
 *                example:                         
 *                  {"err": "계정을 확인해주세요."}
 *        '400-(5)':
 *          description: 비밀번호 길이 에러
 *          content:
 *             application/json:
 *              schema:
 *                example:                         
 *                  {"err": "비밀번호 길이를 확인해주세요."}
 * 
 * 
 *  /user/login:
 *    post:
 *      summary: 로그인
 *      tags:
 *      - Users
 *      description: email pw를 입력하여 로그인
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: body
 *          name: email
 *          required: true
 *          type: string
 *          description : "email, password"
 *
 *      responses:
 *       200:
 *        description: 로그인 성공
 *
 * 
 *  /user/update/:mgrId:
 *    patch:
 *      summary: 회원 정보 수정
 *      description: 특정 회원의 정보 수정(단일 데이터를 수정할 때 사용함)
 *      tags: 
 *      - Users
 *      parameters: 
 *          - in: path
 *            name: adminId
 *            description: 대표관리자의 고유 id값
 *            type: number
 *          - in: body
 *            name: mgrId
 *            description: 수정할 회원의 고유 id값
 *            type: number
 *          - in: body
 *            name: name
 *            description: 회원의 이름
 *            type: string
 *          - in: body
 *            name: phone_number
 *            description: 회원의 전화번호
 *            type: string
 *          - in: body
 *            name: region
 *            description: 회원의 지역
 *            type: string
 *      required: true
 *      
 *      responses:
 *       200:
 *        description: 회원 정보 수정 (사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다.)
 *        
 *
 *  /excel:
 *    get:
 *      summary: 각 지역별 담당자가 해당 지역에 대한 데이터를 엑셀 파일로 다운로드 및 필터링 후 다운로드 구현
 *      tags:
 *      - Excel Download
 *      description: token을 받아와 지역 담당자를 판별 후 해당 지역의 데이터를 엑셀 파일로 다운로드
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: headers
 *          name: token
 *          required: true
 *          type: string
 *          description : 로그인 시 발급 된 토큰
 *        - in: query
 *          name: operating_institution_tel
 *          required: false
 *          type: string
 *          description : 운영기관전화번호
 *        - in: query
 *          name: operating_institution_name
 *          required: false
 *          type: string
 *          description : 운영기관명
 *        - in: query
 *          name: center_name
 *          required: false
 *          type: string
 *          description : 치매센터명
 *        - in: query
 *          name: doctors
 *          required: false
 *          type: string
 *          description : 의사인원수
 *        - in: query
 *          name: nurses
 *          required: false
 *          type: string
 *          description : 간호사인원수
 *        - in: query
 *          name: social_workers
 *          required: false
 *          type: string
 *          description : 사회복지사인원수
 *        - in: query
 *          name: center_type
 *          required: false
 *          type: string
 *          description : 치매센터유형
 *
 *      responses:
 *       201:
 *        description: 엑셀 다운로드 (Haii.xlsx) 성공 및 데이터 리턴
 *
 *
 */
