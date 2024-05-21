const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING(15),
    allowNull: false,
    primaryKey: true,
  },
  hashedPassword: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  firstName: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING(150),
  },
  profilePicture: {
    type: DataTypes.BLOB,
  },
  postsCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'user',
  timestamps: false,
  engine: 'MYISAM',
  charset: 'latin1',
});

module.exports = User;
