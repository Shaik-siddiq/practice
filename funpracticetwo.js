/* Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */

function describeCountry(country,population,capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`  
}
let descountry = describeCountry('India',121,'Delhi');
let desforgien = describeCountry('America',50, 'NewYork');
let deseastern = describeCountry('Turkey', 50, 'Alepo');
console.log(`${descountry},\n${desforgien},\n${deseastern}`);

/* 
The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) */


function percentageofWorld1(countrys,population) {  
 return `${countrys} has ${population} million people, so it's about ${population/7900*100} of the world population`
}
let asia = percentageofWorld1('Asia',3400);
let australia = percentageofWorld1('Australia',1200);
let america = percentageofWorld1('America',5000);
console.log(asia,'\n', australia,'\n', america);

/* Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */

var percentageOfWorld3 = (countries, populations) => {return `${countries} has ${populations} million people, so it's about ${populations/7900*100} of the world population` }
let andhra = percentageOfWorld3('Asia',3400);
let costha = percentageOfWorld3('guntur',1100);
console.log(andhra,'\n',costha);

/* Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice */

function describePopulation(countrys,population) {
 percentageofWorld1.call(this,countrys,population)
 this.percentage = population/7900*100;
 return `${countrys} has ${population} million people which is about ${this.percentage} of the world`
}
let see = describePopulation('ok',2);
let me = describePopulation('seem',1210);
console.log(see,'\n', me);


/* 
Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values */

let countriess =['india','china','america'];
let populationss = [121,150,60];
console.log(populationss);
console.log(populationss.length-1);

let percentages = percentageofWorld1(countriess[0],populationss[0]);
console.log(percentages);

/* Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'. */

let neighbouringcountries = ['pakistan','srilanka','nepal','bangladesh','china'];
let newneigbour =[...neighbouringcountries, 'germany','Utopia']
console.log(newneigbour);
console.log(newneigbour.pop());
console.log(newneigbour);
for(s=0; newneigbour.length>s; s++){
if(newneigbour[s]=='germany'){
    console.log('germany included in neighbour');
}
else{
    console.log('array does not include the country Germany')
}
}
newneigbour[newneigbour.indexOf('srilanka')]='Ravanlanka';// by using indexOf we can change the message in anywhere in array
console.log(newneigbour)

/*Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)*/

let mycountry = {
    country1:'India',
    capital:'Delhi',
    language:['telugu','tamil','hindi','kannada','malyalam'],
    neighbouringcountriess:['pakistan','srilanka','nepal','bangladesh','china']
}
let describess = mycountry;
describess.CheckIslands = 'Lakshwadeep andamanNicobar';
console.log(describess.CheckIslands);
console.log(mycountry);
console.log(mycountry.neighbouringcountriess);
console.log(mycountry.country1);
let {capital} = mycountry;
console.log(capital);
capital = 'new Delhi'
console.log(capital);

/*Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.*/

class describe{
    constructor(){
        this.country2 = 'India',
        this.capital2 = 'Delhi',
        this.languagess = ['telugu','tamil','hindi','kannada','malyalam'],
        this.neighbouringcountriese = ['pakistan','srilanka','nepal','bangladesh','china']  
    }
    introuduce (){
        console.log(`Hi my country is ${this.country2} and it's capital is ${this.capital2} and we have many languages ${this.languagess} and we have some neighbouring countries ${this.neighbouringcountriese}`);
    }
}
let describes = new describe;

describes.checkIsland = true;
console.log(describes);
describes.checkIsland?console.log('yes it has Island'):console.log('no it has no Island');
describes.introuduce();

/*There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'*/

for (s=1; s<50; s++){ console.log(`voter number ${s} is currently voting` )}

/*Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is*/

let populationse = [223,33,443,534,34,56];
for(populatione of populationse){
 populatione/7500*100;
}
console.log(populatione);

let popus = populationse.map( popu => popu/7500*100)
console.log(popus);

//console.log(populationse.forEach( pop => pop/7800*100));

