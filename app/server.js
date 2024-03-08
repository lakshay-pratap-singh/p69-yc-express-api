const http = require("http");
const listner = require("./listner");
const { dbSqlStart } = require("./database");


const server = http.createServer(listner);
const PORT = process.argv[2];



const startServer = async () => {
    await dbSqlStart();
    server.listen(PORT,() => {
        console.log("Nodejs serer is running on port " + PORT)
    })
}

startServer();