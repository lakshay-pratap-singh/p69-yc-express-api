const express = require("express");
const applicationApis = require("./applications/router");


const apis = express.Router();

apis.use("/applications",applicationApis)

module.exports = apis;