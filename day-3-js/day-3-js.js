var number = 87;

// console.log(87 / 2)// que
// console.log(87 % 2)// remin
// console.log(86 / 2)// que

// console.log(83 % 2) 
// console.log(84 % 2)
// console.log(85 % 2)
// console.log(86 % 2)

// console.log(56 % 2 == 0)
// console.log(57 % 2 == 0)

// var number = 87;
// if(number % 2 == 0){
//     console.log(`the ${number}is even`)
// }
// else{
//     console.log(`the ${number} is odd`)
// }

// datatypes

// var mynumber
// console.log("typeof(mynumber)") //undefined datatypes



// Q-given an a number find out is number even or odd. if number is even then check number1 and if number is odd check number3 ?

var number1 =23; 
var number2 = 78;
var number3 = 67;

if(number % 2 == 0){
    if (number2 % 2 == 0){
        console.log(`$(number1) and $(number2) are even number.`)
    }
    else{
        console.log(`$(number1) is even but and $(number) is odd.`)
    }
} 
else{
    if (number3 % 2 == 0){
        console.log(`$(number3) is even and $(number1) is odd.`)
    }else{
        console.log(`$(number3) and $(number1) both are odd`)
    }

}

