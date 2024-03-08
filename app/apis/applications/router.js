const express = require("express");
const {ycApplicationPostReq, ycApplicationPutReq} = require("./handler/yc");
const convertFormDataToJson = require("../../services/convertFormDataToJson");


const applicationApis = express.Router();

applicationApis.post("/yc",convertFormDataToJson(),ycApplicationPostReq);
applicationApis.put("/yc",convertFormDataToJson(),ycApplicationPutReq)

module.exports = applicationApis;