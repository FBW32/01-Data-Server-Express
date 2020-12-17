const express=require('express')
const app=express()
app.use(express.json())

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// db.defaults({ records: [{}]}).write()

app.get('/records',(req,res)=>{
  const records=db.get("records").value()
  res.json(records)
})
app.post('/records',(req,res)=>{
  console.log(req.body);
  if(req.body.length){
    db.get("records").push(req.body).write()
  res.json({message:"record added into  database",success:true})
  }else{
    res.json({message:"record coudnt added into  database",success:false})
  }
})


app.listen(3000,()=>console.log("server is running"))