const mysql = require("mysql")

module.exports = async () => {

    let db = mysql.createConnection({
        host: "",
        user: "",
        password: "",
        database: ""
    })

    return db;
}