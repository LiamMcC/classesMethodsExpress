'use strict';
var products = require("./products.json");
var fs = require('fs')
var express = require('express')
var app = express();



module.exports = class ProductData {
   constructor(productName, productPrice) {
       this.productName = productName;
       this.productPrice = productPrice;
       console.log("Where am I " + this.productName)
   }

  newProduct() {
       var product = "This Product is " + this.productName + " " + this.productPrice
       return product;
   }



  static allProducts() {

     return products


  }


 makeNew() {
 //   var contact = require("./contact.json");

function getMax(products, id){ // function is called getMax
    var max // the max variable is declared here but still unknown

        for(var i=0; i<products.length; i++){ // loop through the contacts in the json fil as long as there are contcats to read
            if(!max || parseInt(products[i][id])> parseInt(max[id]))
            max = products[i];
                }

    return max;
     }

     
     // make a new ID for the next item in the JSON file
     
     var maxCid = getMax(products, "id"); // calls the gstMax function from above and passes in parameters 
     
     var newId = maxCid.id + 1; // add 1 to old largest to make ne largest
     
     // show the result in the console
     console.log("new Id is " + newId + this.productName)
     
     
     // we need to get access to what the user types in the form
     // and pass it to our JSON file as the new data
     
     var contactsx = {
         
         
         id: 88,
         name: this.productName,
         Comment: "Bollox",
         email: "req.body.email"
         
         
     }
     
     
fs.readFile('./products.json', 'utf8',  function readfileCallback(err){

if(err) {
    throw(err)
    
} else {
    
    products.push(contactsx); // add the new data to the JSON file
    var json = JSON.stringify(products, null, 4); // this line structures the JSON so it is easy on the eye
    fs.writeFile('./products.json',json, 'utf8', function readfileCallback(err){})
    
}

})  
console.log(this.productName)       
return "The Id is " + newId

}





}