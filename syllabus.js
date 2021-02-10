/* /* /* /* variables */
/* let a = 10;
let b = 'abcdefghijklmnopqrstuvwxyz';
let c = '!@#$%^&*';
let d = 'A';
/* operators */
/* let e = 12;
let sum = a + e;
let mul = a * e;
let div = a/e;
let sub = a-e;
let mod = a%e; */
// conditions //

/*if (a<e && e>a) {
    console.log(sum);
    console.log(mod);
    console.log(mul);
}
else{
    console.log(sub);
    console.log(div);
}
let fruitType = 'Apple';
switch (fruitType) {
    case 'Apple':
        console.log('apple cost is 100/-');
        break;
    case 'banana':
        console.log('banana cost is 30/-');
        break;
    case 'oragage':
        console.log('orange cost is 40/-');
        break;
     default:
        console.log('this code is wrong')
        break;
}
// loops, Array //
for(let f=0; f<=10; f++){
    let mull = f*2;
    console.log('2' + '*' + f + '=' +mull);
}
let g = 5;
let h = 6;
while (g<60){
    let nextterm = g+h;
     g = h;
     h = nextterm;
    console.log(nextterm);
    nextterm++;
}
let colors =['red','green', 'pink','black','white'];
for (const color of colors) {
    console.log(color);   
}
let num = [3,5,6,3,8,9];
num.forEach(elem => {
    let i = elem+5;
    console.log(i);
});
colors.pop;
console.log(colors);
colors.push('blue')
console.log(colors);
colors.shift;
console.log(colors);
colors.unshift('yellow')
console.log(colors);
console.log(colors.length-1);
const err = colors[Symbol.iterator]();
colors.slice(2,3);
console.log(colors);
colors.sort;
console.log(colors);
colors.splice(5,1,'chrimson')
console.log(colors);
// Function //
let j = 10;
function colo() {
    let k =20;
    let sums = j + k;
    return sums;
}
let ls = colo();
console.log(ls());
*/
/*
// array splice it modifies the ouptup and changes the orginal array//
var arryorginal =[1,2,3,4,5];
console.log(arryorginal.splice(2,2,'a','b','c'));
console.log(arryorginal);
//array slice it wont modifiy the orignal array and if we created a new array then it saves that in new array//
let original = arryorginal.slice(0,1,'a','b','c') 
console.log(original);
console.log(arryorginal);
// class function//
/*const handler = () => (console.log('this is a click handler'));
document.addEventListener('click', handler);
const firstorder = () => console.log('this is arrow function');
*/


//console.log(cars.splice(0,0,{name:'white .car'}));
//console.log(cars);
/* 
let counter = 30;
if(counter === 30){
    let counter = 31;
    console.log(counter);// if we try to update outside of condition then it will give error. 
}
console.log(counter); */
/* 
let see = 40;
let see = 41;// here it shows identifier see has alredy been declared
 */
/*
 let snatch = 1;
 switch (1) {
 case 0 :{
     let name;
     break;
 }
 case 1:{
     let name ='sid';// here it won't show any syntax error.
      //because every case we using curlybraces{}.
      // then it the let regarding about that loop will be stayed there itself 
     break;
 }
}
*/
/*
let ok =1;
switch (hm) {
    case 0:
        let name;
        break;
    case 1:
        let name;// identifier name has alredy been declared.
        break;
}
*/
/*
(function checking() {
    var message = 'IIFE'
    console.log(message);
    
});
checker = checking();// due IIFE(Immediatedly invoked function expression) this function wont work outside.
//console.log(message);//message is not defined.The primary reason to use an IIFE is to obtain data privacy because 
//any variables declared within the IIFE cannot be accessed by the outside world. i.e, 
//If you try to access variables with IIFE then it throws an error as below,
*/

/* 
function check(){
    var messy = 'hai';
    console.log(messy);// the inside of function only it works
}
checks = check();// if we wont mention funtion then it wont shows o/p but the memory allocated but we cant see the o/p
//console.log(messy); // if gives out side of function then it throws error: ReferneceError: messy is not defined
 */
/* 
//math
var math = 34.43567;
console.log(Math.floor(math));// it gives only integer number o/p = 34
console.log(Math.ceil(math));// it gives incremented number o/p = 35
console.log(Math.random(math));// it gives a random number from 0-34 o/p = 0.98486;
console.log(Math.abs(math));// it gives a absolute number o/p = 34.43567
console.log(Math.cos(math));// it gives cosine value of given number o/p = -0.99258556
console.log(Math.pow(math));// for this given number it given NaN
console.log(Math.sqrt(math));// it gives square root of given number o/p = 5.868
console.log(Math.PI);// it gives PI number o/p = 3.141592
console.log(Math.atan(math));// it is used to return the arctangent of a number in radians o/p = 1.54176
console.log(Math.atan2(math));//method returns a numeric value between -π and π representing the angle theta of an (x, y) point. This is the counterclockwise angle, measured in radians, between the positive X axis, and the point (x, y) ./
console.log(Math.E);//it Eluers number 2.7182
console.log(Math.SQRT2);// it gives square root of 2 1.41421
console.log(Math.max(math));// it is used for arrays here o/p = 34.43567
console.log(Math.min(math));// it is also used for arrays here o/p = 34.43567
console.log(Math.exp(math));// it gives the exponetial value of given number
console.log(Math.fround(math)); // The Math.fround() function returns the nearest 32-bit single precision float representation of a Number.
console.log(Math.log(math));// it gives the log value of given number o/p=3.53909
console.log(Math.log10(math));// it gives the log^10 value of given number o/p = 1.537008
 */





































