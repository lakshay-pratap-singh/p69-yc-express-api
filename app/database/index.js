const { Sequelize } = require('sequelize');

const dbConfif = require("../../configs/database");


const dbSql = new Sequelize(dbConfif);


const dbSqlStart = async () => {
    try {
        await dbSql.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log("dbConnectionError", error);
    }

}


module.exports = {
    dbSqlStart,
    dbSql
};