// // loops
// // for

// Q-print numbers from 0-1000.

var number = 1;
number++
number++
number++
console.log(number)

var number = 1;
number++
number++
number--
console.log(number)


// for(starting;ending;sequence ){
    
// }

for (i=0; i<10; i++){
    console.log(i)
}


for (i=10; i>=0; i++){    //reverse loop
    console.log(i)
}

// function 

function anyname(){
    console.log("Hii..")
}
anyname();

function doubleit(number){
    console.log(number*number)
}
doubleit(4);

function Arithmetic(number1, number2){
    console.log(number1 + number2, "-addition")
    console.log(number1 - number2, "-subt")
    console.log(number1 * number2, "-multi")
    console.log(number1 / number2, "-div")

}
Arithmetic(2,3);

function div(num1 , num2){
    var div = num1 / num2;
    console.log(div)
    console.log(Math.floor(div))
    console.log(Math.ceil(div))
}
div(123,77 )