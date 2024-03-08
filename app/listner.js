const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const apis = require("./apis");


const listner = express();

listner.use(express.json());
listner.use(helmet());
listner.use(cors({origin:"*"}));
listner.use(apis)

module.exports = listner;