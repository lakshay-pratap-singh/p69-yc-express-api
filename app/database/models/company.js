// company.model.js

const { DataTypes } = require('sequelize');
const { dbSql } = require("../index");

const Company = dbSql.define('company', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  about: {
    type: DataTypes.STRING,
  },
  company_url: {
    type: DataTypes.STRING,
  },
  product_demo_video: {
    type: DataTypes.STRING,
  },
  product_url: {
    type: DataTypes.STRING,
  },
  // Add other columns following the same pattern
  // ...
  why_apply_here: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'company',
});

module.exports = Company;
