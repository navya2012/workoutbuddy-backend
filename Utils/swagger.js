const swaggerJsdoc = require('swagger-jsdoc');
// const route = require("../routes/*.js")

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Workout-Buddy-API',
      version: '1.0.0',
      description: "Workout Buddy project API documentation",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ['../routes/*.js']
};

// Generate the Swagger specification
const swaggerSpecification = swaggerJsdoc(options);

module.exports = { swaggerSpecification };
