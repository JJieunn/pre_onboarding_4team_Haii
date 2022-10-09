// API 명세서
/**
 * @swagger
 * paths:
 *  /user/login:
 *    post:
 *      summary: 로그인
 *      tags:
 *      - Users
 *      description: email pw를 입력하로그인
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: body
 *          name: email
 *          required: true
 *          type: string
 *          description : "email,password"
 *
 *      responses:
 *       200:
 *        description: 로그인 성공
 *
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
