const { dbSql } = require("../index");
const { DataTypes } = require('sequelize');
const Company = require("./company");


const Founder = dbSql.define('founder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    linkedin_url: {
        type: DataTypes.STRING,
    },
    is_technical: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    question_contribution: {
        type: DataTypes.STRING,
    },
    question_meet: {
        type: DataTypes.STRING,
    },
    invites: {
        type: DataTypes.STRING,
    },
    founder_video: {
        type: DataTypes.STRING,
    },
    company_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Company,
            key: 'id',
        },
    },
}, {
    tableName: 'founder',
});



module.exports = Founder