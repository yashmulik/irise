// var numbers = [23, 15, 81, 74, 57, 88, 53, 49, 36, 61]
// console.log(numbers)

// function findsumandeven(array){
    
    // console.log(array)
//     var oddcount = 0;
//     var evencount = 0;

//     for(var i=0; i < array.length; i++){
//     // console.log(array[i], i)
//    if(array[i] % 2 == 0){
//      evencount++;
//    }
//    else{
//       oddcount++;
//    }
// }
//    console.log(oddcount, "oddcount")
//    console.log(evencount, "evencount")

// }
// findsumandeven(numbers)

// nested for loops

// for(var i = 0; i < array.length; i++){
//     for(var j = 0; j < array.length; j++){

//     }
// }

// Q-given an array and target,
//  find out two numbers whos additon is target

 var array = [23, 3, 4, 8, 4, 2, 58, 9, 6, 4, 24, 6, 7, 65, 4, 5]
 var target = 8;

 var totalrun=0;
 for(var i = 0; i < array.length ; i++){
    // console.log(array[i], "i")
    for(var j = i + 1; j < array.length - 1; j++){
        // console.log(array[j], "j", array[i], "i")
       if(array[i] + array[j] == target){
       console.log(`${array[i]} + ${array[j]} = ${target}`)
       }
       totalrun++;
      }
 }
   console.log(totalrun, "totalrun")