console.log('Thierno Diallo')
/*
console.log(' The curent counter is 1 ')
console.log(' The curent counter is 2 ')
console.log(' The curent counter is 3 ')
console.log(' The curent counter is 4 ')
console.log(' The curent counter is 5 ')
*/
//Simplify the previous lines using for loop
//Example 1

for(let counter = 0; counter<=20; counter++){
console.log(`The current counter is ${counter}` );
} 


//Example 2 print number from initial to 50, exclusive,
// only even numbers. The program will asks the user to enter 
// a number
// exclusive mean we do not include the last number "50"
//the even number is only when the number is divisible by 2
let num = parseInt(prompt('Enter a number between 0 and 40: '));
for(num; num<50; num++){
    if(num%2===0){
    console.log(`number = ${num}`)

}
}


//Example 3
// print number from 100 to 0, inclusive, 
//decreasing oredr in a step of 10
//inclusive mean include the last number 

for(let y = 100; y >=0; y-=10){
console.log(`y=${y}`)
}

//Example 4: for loop in an array

let cars = ['Tesla', 'BMW', 'Mazda', 'Nissan', 'Jeep']

for(let i=0; i<cars.length ; i++){
console.log(`car ${i+1} = ${cars[1]}`)
}

// example 5 ) for ... of loop to print each element in an array
 for (let eachItem of cars){
 console.log(eachItem)
 }

 //Example 6 of loop to print each letter in a string 
 let myString = "Thierno. Diallo"
 for(let eachLetter of myString){
    console.log(eachLetter)
 }

// example 8) nesting for loops
let outerCounter =1;
for(outerCounter; outerCounter<=5 ; outerCounter++){
    console.log(`-------OUTER LOOP ${outerCounter}-------`)
    for(let innerCounter =30; innerCounter>=0 ; innerCounter-=10){
    console.log(` Inner Counetr ${innerCounter}`)
} 
}

// example 9) while loop

let z = 1;
while(z <=5){
console.log(`The current number is ${z}`)
z++
}

//example 10) secret number
console.log('---Example 10 ---')

const SECRET = 8;
let guessNum = parseInt(prompt('Geuss a number between 0 and 10'))
while(guessNum !== SECRET){
guessNum = parseInt(prompt('Wrong! take a guess again!'))
}

    console.log(`GREAT JOB! Number ${guessNum} is the secret number`)

//EXAMPLE 11 WORKING WITH BREAK IN A LOOP. loop will be determinated when t=9
console.log('---------EXAMPLE 11')
for(let t = 20; t >0; t--){
console.log(`t = ${t}`)

if(t===9){
    break;
}
}

//Example12) working with continue in a loop. loop will skip one iteration when t = 9
console.log('--------EXAMPLE 12-----')
for(let t = 20; t >0; t--){
   
    if(t===9){
        continue;
    }
        console.log(`t = ${t}`)
    
    }


    // Example 13

    console.log( '---Example 13 ---')

    const NUMBERS = [8,2];
    let num1 , num2;
let guessNumbers= parseInt(prompt('Geuss a number between 0 and 10'))

for (let r of NUMBERS){
   
}

while(guessNumbers !==r ){
guessNum = parseInt(prompt('Wrong! take a guess again!'))
}

    console.log(`GREAT JOB! Number ${guessNum} is the secret number`)