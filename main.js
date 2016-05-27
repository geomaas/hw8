// code goes here :)

// document.getElementsbyid()


// answer 1 code
var cost = 0
var avgPrice = items.map(function(element,idx,arr){
  return element.price
})
.forEach(function(element,idx,arr){
  cost = cost + element;
})



document.getElementById("answer1").innerHTML = cost / items.length ;


// answer 2 code answered
var midPrice = items.filter(function(element,idx,arr){
  return element.price >= 14 && element.price <= 18 && element.currency_code === "USD";
}).map(function(element,idx,arr){
  return element.title;
})

document.getElementById("answer2").innerHTML = midPrice;


// answer 3 code answered
var gbpItems = items.filter(function(element,idx,arr){
  return element.currency_code === "GBP"
}).map(function(element,idx,arr){
  return element.title + " " + element.price + " pounds";
})

document.getElementById("answer3").innerHTML = gbpItems;


//answer 4 code answered
var woodItems = items.filter(function(element,idx,arr){
  return element.materials.indexOf("wood") !==-1;
}).map(function(element,idx,arr){
  return element.title
})
document.getElementById("answer4").innerHTML = woodItems;


//answer 5 code answered
var eightItems = items.filter(function(element,idx,arr){
  return element.materials.length >= 8;
}).map(function(element,idx,arr){
  return element.title + " QUANTITY: " + element.quantity + " MATERIALS: " + element.materials;
})

document.getElementById("answer5").innerHTML = eightItems;


//answer 6 code
var sellerMade = items.filter(function(element,idx,arr){
  return element.who_made === "i_did";
})
document.getElementById("answer6").innerHTML = sellerMade.length;
// element.who_made.length; add .lenght in display in the html
