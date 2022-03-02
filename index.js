var express = require("express"); // call express to be used by the application.

var app = express()

// parse application/x-www-form-urlencoded
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json

const path = require('path');
app.use(express.static("views"))




app.set('view engine', 'ejs'); // Set the template engine (thanks Kevin!)

app.use(express.static("views")); // Allow access to views folder




var productData = require("./productData.js");

// function to render the home page
app.get('/', function(req, res){
//res.render("home.ejs")
var aProduct = new productData("Product 1", "€100");
//res.send(productData.display()) you can call a method by calling the variable module name as above then the method. If its static make sure its declared as static in the class

//res.send(aProduct.newProduct())

var showProductOnPage = aProduct.newProduct()
console.log("I logged gamestate " + showProductOnPage)
res.render("home.ejs", {showProductOnPage})
});


// function to render the home page
app.get('/page2', function(req, res){
  var products = productData.allProducts()
  res.render("page2.ejs", {products})
 });



 // function to render the home page
app.get('/addit', function(req, res){
  var products = productData.allProducts()
  res.render("addit.ejs")
 });


 app.post('/addit', function(req, res){
   var what = req.body.name
  var bProduct = new productData(what, "€100");
  var products = bProduct.makeNew()
  console.log("Im Confused " + what)
  res.send("Did It Work " + what  )
 });





// We need to set the requirements for teh application to run

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
  console.log("App is Running ......... Yessssssssssssss!")
});