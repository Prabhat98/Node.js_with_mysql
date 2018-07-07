const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"myuser",
    password:"mypass",
    database:"mydatabase"
});

const insert = 
{
    name:process.argv[2],
    age:parseInt(process.argv[3]),//parseInt parses a string and returns an integer
    city:process.argv[4]
}

connection.query(
    `INSERT INTO persons(name,age,city) VALUES(
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`,
    function(err,result)
    {
        if(err)
        {
            console.error(err);
        }
        else
        {
            console.log(result);
            console.log("Data inserted Successfully");
        }
        connection.close();
    }
)