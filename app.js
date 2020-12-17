const express = require("express")
const  app = express()
app.use(express.json())

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
/*  // Set some defaults
db.defaults({ posts: [], user: {} })
  .write()
 */
    

  app.get("/api/records",(req,res)=>{
      console.log("server home here")
      const records = db.get("records").value()
      res.json(records)
  })

  app.post("/api/records",(req,res)=>{
    db.get("records").push(req.body).write()
    res.send("data saved in database")
})
  

app.listen(3000, ()=> console.log("server is running"))