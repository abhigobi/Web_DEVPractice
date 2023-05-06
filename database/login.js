const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const encoder = bodyParser.urlencoded();

const app = express();

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3300,
    database:"pbl",
    password:"password"
});

connection.connect(function(err){
    if(err)
    {throw err} 
    else
     {console.log("Connected to the server")}
});

app.get("/" , function(req,res){
    res.sendFile(__dirname +"/index.html");
})

app.post("/" ,encoder,function(req,res){
   var username = req.body.username;
   var password = req.body.password;
   
    connection.query("select * from students where user_name = ? and user_pass = ?",[username,password],function(error,results,fields){
        if(results.length > 0){
            res.redirect("/welcome");
        }else{
            res.redirect("/");
        }
        res.end();
    })

    app.get("/welcome",function(req,res){
        res.sendFile(__dirname +"/welcome.html")
    })

})

app.listen(3000,function(){
    console.log("server is running");
});
