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
 *  /parsing:
 *    post:
 *      summary: 데이터 파싱 후 데이터 저장
 *      tags:
 *      - Parsing
 *      description: Json파일을 파싱후 데이터베이스 저장
 *      produces:
 *      - application/json
 *      parameters:
 *        - name: token
 *          in: header
 *          description: "대표 관리자 확인 토큰"
 *          required: false
 *          schema:
 *          type: string
 * 
 * 
 *      responses:
 *        '200':
 *          description: 데이터 파싱 및 저장 성공
 *          content:
 *            application/json:
 *              schema:
 *               type: object
 *               properties:
 *                  message:
 *                    type: string
 *                    example: "data parsing success"

 *        '400':
 *          description: 대표관리자가 아닌 경우
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "you are not a representative manager"
 *        '500':
 *          description: 토큰이 없는 경우
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "jwt must be provided"
 *  /excel:
 *    get:
 *      summary: 각 지역별 담당자가 해당 지역에 대한 데이터를 엑셀 파일로 다운로드 및 필터링 후 다운로드 구현
 *      tags:
 *      - Excel Download
 *      description: token을 받아와 지역 담당자를 판별 후 해당 지역의 데이터를 엑셀 파일로 다운로드
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: header
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
 *          name: operating_institution_rep
 *          required: false
 *          type: string
 *          description : 운영기관대표자명
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
