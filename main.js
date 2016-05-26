// code goes here :)
items.map(function(element,idx,arr){
  return element.price;
}).forEach(function(element,idx,arr){
  console.log(element[element.price]);
})
