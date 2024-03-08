const { dbSql } = require("../index");
const Company = require("./company");
const Founder = require("./founder");

const sqlModel = {
    Company,
    Founder
}

dbSql.sync();

module.exports = sqlModel;