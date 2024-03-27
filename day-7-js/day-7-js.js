var result = [1,2,3,4,5,6,7,8,9,10]

for( var i = 1; i < 10; i++){
    // console.log(i)
    result.push(i)
}
console.log(result)
console.log(result.join(" "))


/////////////////////////////////////////////////////////////////////////////

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

/////////////////////////////////////////////////////////////////////////////////////////////

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

/////////////////////////////////////////////////////////////////////////////////////////////

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

///////////////////////////////////////////////////////////////////////////////////////////////

const array2 = [1, 2, 3];

console.log(array2.unshift(4, 5));
// Expected output: 5

console.log(array2);
// Expected output: Array [4, 5, 1, 2, 3]

//////////////////////////////////////////////////////////////////////////////////////////////

const array3 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array3.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]