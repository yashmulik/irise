var number1 = 23;
var number2 = 98;
var addition = number1 + number2;
console.log(addition,"-addition")
var substraction = number1 -number2;
console.log(substraction)
var divid = number1 / number2;
console.log(divid)
var multi = number1 * number2;
console.log(multi)

// conditional statement 

// if else

// if(condition){
//   statement -  true

// }else{

//     statement - false
// }

// console.log(1>2)

if(2<1){
   console.log("2 is greater than 1 ")
}
else{
    console.log("1 is greater than 2")
}

// = -> use to assign a value
// == -> use to campare values
// === -> use to compare values with datatypes

console.log(2 == "2")
console.log(2 === "2")

var num = 23;
if (num == 23){
    console.log("value matched")
}
else{
    console.log("value did not matched")
}

// && || operators
// && -> all conditions must be true then ill return true
// || -> one condition true then ill return true

console.log(1 == 1 && 2 == 2 )
console.log(1 == 13 && 2 == 2 )
console.log(1 == 23 && 2 == 34 )

console.log(1 == 1 || 2 == 2)
console.log(1 == 1 || 2 == 23)


var age = 23;

if (age == 19){
    console.log("you are eligible for learning license")
}
else if (age >19 && age < 80) {
    console.log("you are eligible for driving license")
}
else if (age < 0 || age == 0){
    console.log(" you are not even born")
}
else{
    console.log("you are under age or over age, you are not allowed")
}