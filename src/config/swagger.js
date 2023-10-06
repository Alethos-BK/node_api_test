const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    swaggerDefinition : {
        openapi: "3.0.0",
        info: {
            title: "Apizinha de teste em node",
            version: "1.0.0",
            description: "Swagguer da minha apizinha de teste"
        },
        basePath: "/"
    },
    apis: ["./src/router.js"]
};

const swaggerSpec  = swaggerJSDoc(options);

module.exports = swaggerSpec;