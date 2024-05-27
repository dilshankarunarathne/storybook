require('dotenv').config();

const fs = require('fs');

const express = require('express');
const cors = require('cors');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const db = require('./db');

db.sync()
  .then(() => console.log('Tables have been created'))
  .catch(error => console.error('Unable to create tables', error));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'StoryBook API',
      version: '1.0.0',
      description: 'API Documentation for StoryBook',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
  },
  apis: ['./controllers/*.js'],
};

const authController = require('./controllers/authController');
const homeController = require('./controllers/homeController');
const reactController = require('./controllers/reactController');
const commentController = require('./controllers/commentController');
const profileController = require('./controllers/profileController');

app.use(cors()); 
app.use(express.json());

app.use('/', homeController);
app.use('/auth', authController);
app.use('/react', reactController);
app.use('/comment', commentController);
app.use('/profile', profileController);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// fs.writeFileSync('./swagger.json', JSON.stringify(swaggerDocs, null, 2));

app.listen(8000, () => console.log('Server started on port 8000'));
