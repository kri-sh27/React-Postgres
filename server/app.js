const express = require('express');
const app = express();
require("./db/conn")
const cors = require('cors');
const router = require("./routes/router")

const conn = require('./db/conn')
const port = 8004;


// app.get("/get",(req,res)=>{
//     res.send("runnig")
// })
app.use(express.json());
app.use(cors());
app.use("/uploads",express.static("./uploads"))

app.use(router);

app.get('/api/images', async (req, res) => {
    try {
      const images = await conn.query('SELECT * FROM productlist');
      res.json(productlist.rows);
    } catch (err) {
      console.error(err.message);
    }
  });


app.listen(port,()=>{
    console.log("server start");
})