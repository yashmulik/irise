// foreach

// const array1 = ['a', 'b', 'c'];

// array1.forEach((Element) => console.log(Element))

// reduce 

// const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);

// sort 

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]


// const array2 = [1, 30, 4, 21, 100000];
// array2.sort((a, b) => b - a);
// console.log(array2)


// const array3 = [1, 30, 4, 21, 100000];
// array3.sort((a, b) => a - b);
// console.log(array3)


// Object

// var myObject = { studentsCount: 20, studentsList: ["yash","pratik","virat"] }
// console.log(myObject.studentsCount)
// console.log(myObject.studentsList)
// console.log(myObject.studentsList[0])

// localStorage

var mystudents=["yash", "pratik", "virat"]

// JSON.stringify(myname); //convert js into json
// JSON.parse(myname); //convert json into js 
   
localStorage.setItem("studentsList", JSON.stringify(mystudents)); //store
var data = JSON.parse(localStorage.getItem("studentsList")); //read, retrive
console.log(data,"data from ls")
// localStorage.removeItem(); //delete  