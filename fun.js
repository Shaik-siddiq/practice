for(i=0; i<10; i++){
    if(i%2 === 0){
        console.log(i,'even number');
    }
    else if (i%2 != 0){
        console.log(i,'odd number');
    }
    else{
        console.log(i,'nothing');
    }
}
// prime number
let number =15;
let isPrime = true;
if(number===1){
    console.log(`${number} is not a prime number`);
}    
else if (number >1){
    for(n=2; n<number; n++){
        if(number%n ==0){
            isPrime = false
        }

    }
    if(isPrime){console.log(`${number}  is a prime number`)}
    else{console.log(`${number} is not a prime number`)}

}