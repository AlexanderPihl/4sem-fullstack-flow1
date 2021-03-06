//Excercise 2
console.log("*** Ex 2 ***");
const numbers = [1, 2, 3, 4, 5];

function MyMapCallback(arr) {
    const test = [];
    for (let i = 0; i < arr.length; i++) {
        test.push(arr[i] + 1);
    }
    console.log(test);
}

function myMap(arr, callback) {
    callback(arr);
}

myMap(numbers, MyMapCallback);

//with the array map() method
const newMapArray = numbers.map((n) => n + 1);

console.log(newMapArray);
