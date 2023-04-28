//$("h1").css("color" ,"green");

//$("h1").addClass("big-title"); 

// We can also add the another class 

//$("h1").addClass("big-title margin")

// we can also change the attribute class

//console.log($("a").attr("href"));

// We can also set the value to it 

//console.log($("a").attr("href" , "www.yahoo.com"));

// using the eventlistner 

/*$("h1").click(function()
{
    $("h1").css("color", "purple")
});*/

for(var i=0;i<5;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        document.querySelector("h1").style.color=purple;
    });
}
