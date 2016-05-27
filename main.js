// code goes here :)

// document.getElementsb()


// answer 1 code

var priceList = items.map(function(element,idx,arr){
  return element.price;
})


// answer 2 code answered
items.filter(function(element,idx,arr){
  return element.price >= 14 && element.price <= 18 && element.currency_code === "USD";
}).map(function(element,idx,arr){
  return element.title;
})

// answer 3 code answered
items.filter(function(element,idx,arr){
  return element.currency_code === "GBP"
}).map(function(element,idx,arr){
  return element.title + " " + element.price + "pounds";
})


//answer 4 code answered
items.filter(function(element,idx,arr){
  return element.materials.indexOf("wood") !==-1;
}).map(function(element,idx,arr){
  return element.title
})


//answer 5 code answered
items.filter(function(element,idx,arr){
  return element.materials.length >= 8;
}).map(function(element,idx,arr){
  return element.title + " " + element.quantity + " " + element.materials;
})


//answer 6 code
items.filter(function(element,idx,arr){
  return element.who_made === "i_did";
})
// element.who_made.length; add .lenght in display in the html
