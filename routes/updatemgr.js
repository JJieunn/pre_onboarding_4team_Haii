const express = require('express')
const updateMgrController = require('../controllers/updatemgr')

const router = express.Router();

/**
 * @swagger
 * /api/user/update/{user_id}:
 *   patch:
 *    summary: "유저 수정"
 *    description: "Patch 방식을 통해 특정 유저 수정(단일 데이터를 수정할 때 사용함)"
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: user_id
 *        required: true
 *        description: 유저 아이디
 *        schema:
 *          type: string
 *    requestBody:
 *      description: 유저 수정
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: "유저 이름"
 *    responses:
 *      "200":
 *        description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (유저 수정)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                data:
 *                  type: string
 *                  example:
 *                    [
 *                      { "id": 1, "name": "유저1" },
 *                      { "id": 2, "name": "유저2" },
 *                      { "id": 3, "name": "유저3" },
 *                    ]
 * 
 */
router.patch('/:mgrId', updateMgrController.updateMgr)

module.exports = router;