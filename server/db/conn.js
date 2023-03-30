const { Pool } = require("pg");

const conn = new Pool({
    user: "postgres",
    host: "localhost",
    database: "productdata",
    password: "root",
    port: 4000,
  });

conn.connect((error)=>{
    if(error) throw error;
    console.log("connected !")
});

module.exports = conn