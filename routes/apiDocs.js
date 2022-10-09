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
 *
 */
