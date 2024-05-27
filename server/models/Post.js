const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define('Post', {
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    image: {
        type: DataTypes.BLOB,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    last_modified: {
        type: DataTypes.DATE,
    },
    comments_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    likes_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    tableName: 'post',
    timestamps: false,
    engine: 'MYISAM',
    charset: 'latin1',
});

module.exports = Post;
