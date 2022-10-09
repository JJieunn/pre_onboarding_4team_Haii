const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Admin용 데이터 관리 프로그램',
            version: '1.0.0',
            description: '회원 가입, 로그인, 회원 정보 수정, 데이터베이스 저장, 엑셀 다운로드 API with express',
        },
        server: [{
            host: 'http://localhost:8000',
            description: 'local Server'
        }]
    },
    apis: ['./routes/*.js', './swagger/*']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};