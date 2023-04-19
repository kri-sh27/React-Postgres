const { Pool } = require("pg");

const conn = new Pool({
    user: "ubuntu",
    host: "54.221.148.45",
    database: "productdata",
    password: "root",
    port: 5432,
  });

conn.connect((error)=>{
    if(error) throw error;
    console.log("connected !")
});

module.exports = conn