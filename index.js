const http=require('http');
const fs=require('fs');
const { json } = require('express');
const { SlowBuffer } = require('buffer');

let a=fs.readFileSync("./kl.json","utf-8")
let b=fs.writeFileSync("./kl.txt","")
data={"name":"nartan","age":5};
console.log(performance.now())
const myserver=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end(a);
        console.log(req.path)
    }
    if(req.url=="/home"){
        // res.setHeader()
    //    res.end(json.Stringfy(data));
    }

    if(req.url=="/contact"){
        res.end(b)
    }
})

myserver.listen(3000,()=>{
    console.log("server started");

})