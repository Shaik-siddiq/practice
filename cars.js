
let cars = [{name:'black car'},{name:'grey car'},{name:'orange car'}];
console.log(cars.splice(0,1,{name:'white car'}));
console.log(cars)

/* 
const insert = (cars, index, newItem) => [
    ...cars.slice(0, index),  
    newItem,
    ...cars.slice(index)
  ]
  const result = insert(cars, 1, {name:'white car'});
  console.log(result);
  console.log('by using slice we can add white car in second place') */


  
  console.log(cars.push({name:'white car'}));
  console.log(cars);
  console.log('by using push we cant add white car in second place');




