const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'
    },
    host: 'project1-7edy.onrender.com',
    schemes: ['http', 'https'],
};
 
const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

//this will generate the swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);