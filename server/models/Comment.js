const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const Comment = sequelize.define('Comment', {
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    post: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    last_modified: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'comment',
    timestamps: false,
    engine: 'MYISAM',
    charset: 'latin1',
});

module.exports = Comment;
