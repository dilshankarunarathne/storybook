const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const React = sequelize.define('React', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    post: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'react',
    timestamps: false,
    engine: 'MYISAM',
    charset: 'latin1',
});

module.exports = React;
