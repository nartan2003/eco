const express=require('express');
const app=express();
const port=3000;
const fs=require('fs')
const mongoose=require('mongoose');
const { type } = require('os');
let c=fs.readFileSync('./MOCK_DATA (2).json','utf-8')
let a=fs.readFileSync("./log.txt","utf-8")
app.use(express.urlencoded())
const auth=app.use((req,res,next)=>{
    console.log(req.url,req.method,req.path);
    next()
})

mongoose.connect("mongodb://127.0.0.1:27017/tyhjk")
.then(()=>console.log("mongo connected"))
.catch(err=>console.log(err));
const schema=new mongoose.Schema({
    firstnane:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        unique:true,
    },
});


const user=mongoose.model('user',schema);

app.get('/home',(req,res)=>res.send("./kl.json"));

app.get("/json",(req,res)=>{
    res.json(c);
})
app.post("/contact",(req,res)=>{

    const body=req.body;

    console.log(body)
})



app.listen(port,()=>{
    console.log(`server started succeessfully at ${port}`)
})
