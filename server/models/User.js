const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
    },
    hashed_password: {
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
    first_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    last_name: {
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
    profile_picture: {
        type: DataTypes.BLOB,
    },
    posts_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    verificationCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'user',
    timestamps: false,
    engine: 'MYISAM',
    charset: 'latin1',
});

module.exports = User;
