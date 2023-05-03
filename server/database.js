const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abcd123",
    database: 'examDB'
})

con.connect((err) => {
    if (err) {
        console.log("Error in Connection");
        console.log(err);
    } else {
        console.log("Connection Successfull");
    }
})

module.exports = con;