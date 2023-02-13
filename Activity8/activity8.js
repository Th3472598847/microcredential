console.log('Thierno Diallo')

//EXAMPLE 1
function msg() {
   console.log('Hello World!')
}
msg() // calling function msg ()
msg() // calling function msg ()
msg() // calling it three times

//Example 2
// defining the function first
function printCount(){
    for(let i = 3; i>0 ; i-=1){
        console.log(`counting ${i}`)
    }
}

printCount()

//Example 3
function greeting (name){
    console.log(`Welcom to the program ${name} `)
}

greeting ('Thierno') 

//Example 4
function upperMessage(message){
let upper = message.toUpperCase();
console.log(upper)
}
upperMessage("thierno")

let user = prompt('Enter a message')
upperMessage(user);

//Example 5

function great ( firstName, lastName ){
console.log(`Welcome ${firstName} ${lastName[0].toUpperCase()}`)
}

great("Thierno" , "Diallo")


//EXAMPLE 6

function printMsg(message, numCount){
    for(let counter = 1; counter<=numCount; counter++)
     console.log(`counter = ${counter} = ${message}`)
}

printMsg("Thierno",3)

//EXAMPLE 7

function isSnakeEyes(dice1, dice2){
    if(dice1 === 1 && dice2 ===1){
    console.log("Snake Eyes!")
    }
    else{
        console.log("Opps! Not Snake eyes!")
    }
}


//EXAMPLE 8

function sumXY(){
    let x =1 , y =3;
    return x+y

    console.log('This line is after the return')
}


//EXAMPLE 9 this is function with parameter and return value

function doubleNumber(number){
let dNumber = number*2
return dNumber
dNumber = number*3
}

//EXAMPLE 10- 
function sumNum(num1, num2){
 let sum = num1+num2;
return sum
}

let a = -5, b=8 , c =2
let number1 = sumNum(b,c)
let number2 = sumNum(a,c)

//EXAMPLE 11
 function weater(temperature){
    if(temperature>=75){
        return true
    }
    else{
        return false
    }
 }


 let userWeather = parseInt(prompt('Ask to user to enter a temperature'))
 let userT = weater(userWeather)



//Example 12 ---> array as an argument is a function
function lastElement(arrayInput){
    if(arrayInput ===undefined){
        return "You didn't enter an array"
    }
    else if (arrayInput.lengh !==0){
let lastIndex = arrayInput.lengh - 1 
return arrayInput[lastIndex]
    }
    else{
        return "Array is empty"
    }
}

let array1 = ['lion', 23, false, 'orange', 89]
let arrayAnswer = lastElement(array1)
//Example 13- js build-in function

let num = Math.PI
//Example 14 -random number between 10 and 20
function pickNum(){
    let pick = 10 + Math.round(Math.random()*10)
    return pick
}