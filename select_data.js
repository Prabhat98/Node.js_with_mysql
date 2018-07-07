const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"myuser",
    password:"mypass",
    database:"mydatabase"
});

connection.query(
    `SELECT * FROM persons`,
    function(err,results,fields)//results corresponds to rows and fields corresponds to columns of the table
    {//fields contain more detailed information about columns 
        if(err)
        {
            console.error(err);
        }
        else
        {
            console.log(results);
            console.log(fields);
        }
        connection.close();
    }
)