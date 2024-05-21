const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_CONNECT, {
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
  console.log('Connected to the database');
})
.catch((err) => {
  console.log('Unable to connect to the database:', err);
});

module.exports = sequelize;
