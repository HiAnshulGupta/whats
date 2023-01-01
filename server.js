const express=require('express');
const app=express();

app.get("/",function(req,resp){
    resp.sendFile("public/index.html",{root:__dirname});
})

app.listen(4000);
console.log("server running on 4000");