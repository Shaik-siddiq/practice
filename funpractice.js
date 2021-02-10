//Declare variables called 'country', 'continent' and 'population'
var country ='India';
var continent = 'Asia';
var population = 121000000000000;
console.log(country,continent,population);
/* 
Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet */

  isIsland = false;
var language; // the output will be undefined // and the boolean will be false
//var language = 'hindi'; 'telugu' ; 'tamil'; 'kannada'; 'malyalam'; // it shows only the first value hindi 
console.log(Boolean(isIsland));
console.log(typeof isIsland); // boolean
console.log(typeof country); // string
console.log(language);// undefined
console.log(typeof population); // number
console.log(typeof continent);
console.log(typeof language);// string always be true

const description = country +' ' +continent+' ' +population+' ' +language;
console.log(description);


/* 
Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
    2. Think about which variables should be const variables (which values will never
    change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happens
 */
const mothertounge = 'urdu';
//const mothertounge = 'telugu';// SyntaxError: identifer 'mothertounge'has already been declared

//mothertounge = 'telugu';// TypeError: Assignment is constat vriable.

var language ='hindi';// it takes the first priority one hindi as output

langauge = 'english';// var wont take updated value o/p = hindi

let secondmothertounge = 'telugu';

secondmothertounge = 'spanish'; // updated value will be in console o/p= spanish

//let secondmothertounge = 'hindi';// SystaxError: identifer 'secondmothertounge'has already been declared

console.log('observe what will happen');
console.log(language);
console.log(secondmothertounge);
console.log(mothertounge);
/* 
If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese' */

var splithalf = population/2;
console.log(splithalf);
var add1 = population + 1;
console.log(add1);
let Finland = 600000000;
if(population > Finland){console.log('yes my country have more people than Finaland')}
if (population < 30000000){ console.log('yes it is less than average country')}
else{console.log('My country is second biggest popuplated country')}
var string =  'Portugal is in Europe, and its 11 million people speak portuguese';
/* 
for(i=0; i<population; i++)
console.log(i); */
/* 
Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
 */

if(population > Finland){console.log(`yes my country have more people than \n Finaland`)}
if (population < 30000000){ console.log(`yes it is less than \ average country`)}
else{console.log(`My country is second biggest popuplated country ${population}`)}
var string =  `Portugal is in Europe, \n and its 11 million people speak portuguese`;
/* 
Template literals (`these are called as backticks`) are string literals allowing embedded expressions. 
You can use multi-line strings and string interpolation features with them.
They were called "template strings" in prior editions of the ES2015 specification.
 */


/* 
If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population) */

if( population < 330000){console.log(`Portugal's population is above average`)}
else if (population < 220000){console.log(`Portugal's population is 22 million below average`)}
else{console.log(`India's population is the biggest population`)}

var st = '9' - '5';
var st1 = '19' - '13' + '17';
var st2 = '19' - '13' + 17;
var st3 = '123' < 57;
var st4 = 5 + 6 + '4' + 9 - 4 - 2;
console.log(st);
console.log(st1);
console.log(st2);
console.log(st3);
console.log(st4);

// according to the function the operands changes string to number and js is flexible 


/* 
Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1 */


function myFunction(){
  let border = Number (prompt('How many neighbour countries does your country have?','1'));
  if(!border == 1){
   document.getElementById("demo").innerHTML = 
   border;
   console.log('you have only one borders');
  } 
  else if(border <= 2){
    console.log('you have two borders');
  }
  else{
    console.log('you have many borders');
  }
 } 

/* 
 Comment out the previous code so the prompt doesn't get in the way
 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
 country that speaks english, has less than 50 million people and is not an
 island.
 3. Write an if statement to help Sarah figure out if your country is right for her.
 You will need to write a condition that accounts for all of Sarah's criteria. Take
 your time with this, and check part of the solution if necessary.
 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
 not, log 'Portugal does not meet your criteria :('
 5. Probably your country does not meet all the criteria. So go back and temporarily
 change some variables in order to make the condition true (unless you live in
 Canada : */

country = 'altana';
population = 40;
language = 'english';
if(population > 30 && language ==='english' && !isIsland){console.log(`you should live in ${country} & it's language is ${language}`)}
else if( population > 50 || language === 'english') {console.log(country,'is not meeting your criteria')}
else { console.log('you live in Canada')}

/* 
Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */

var language = ['chinese','spanish','english','hindi','arabic'];
for(s=0; language.length>s; s++){
switch (language[s]) {
  case 'chinese':
      console.log('MOST number of native speakers!');
    break;
   case 'spanish':
      console.log('2nd place in number of native speakers'); 
    break;
    case 'english':
      console.log('3rd place');
     break;
     case 'hindi':
       console.log('Number 4');
      break;
     case 'arabic':
       console.log('5th most spoken language');
      break;  
  default:
    console.log('all are great languages');
    break;
}
}

/* If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

population > 33? console.log(`Portugal's population is above average`):console.log(`Portugal's population is below average`);

population++; console.log(population);