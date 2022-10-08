const express = require('express');
const signUpController = require('../controllers/users_signup')
const router = express.Router();

/**
 * @swagger
 * paths:
 *  /users/signup:
 *    post:
 *      summaryy: "회원 가입"
 *      description: "여러 정보를 담아 회원 가입"
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: 유저 회원 가입
 *          content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: object
 *                    users:
 *                      type: object
 *                      example:
 *                        [
 *                            { "message": "회원 가입에 성공했습니다."}
 *                        ]
 * 
 */


router.post('/signup', signUpController.createUser)


module.exports = router;