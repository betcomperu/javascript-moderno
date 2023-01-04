// Fizz buzz

// multiplos de 3 -> fizz
// multiplos de 5 -> buzz
// multiplos de 15 -> fizzbuzz

for (let i = 3; i < 100; i++) {
    
    if (i%3===0) {
        console.log(`${i} fizz`);
    }else if(i%5===0){
        console.log(`${i} Buzz`);
    }else{
        console.log(`${i} FizzBuzz`);
    }
    
    
}