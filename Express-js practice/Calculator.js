const express = require("express");
const bodyParsor = require("body-parser") 

const app = express();
app.use(bodyParsor.urlencoded({extended: true}));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Addition is" + result);
})

app.get("/bmicalculator.html" , function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html")
});

app.post("/bmicalculator.html", function(req , res){
   var height = Number(req.body.height);
   var weight = Number(req.body.weight);
    var result = height * weight;
    res.send("Bmi claculation is" + result);
});

app.listen(3000,function(){
    console.log("Server is running");
});
