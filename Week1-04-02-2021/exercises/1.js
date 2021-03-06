//Excercise 1
console.log("*** Ex 1 ***");
const array = ["Alex", "Per", "Morten", "Mick", "J-P"];

function myCallback(arr) {
    let callbackArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            callbackArray.push(arr[i]);
        }
    }
    console.log(callbackArray);
}

function myFilter(arr, callback) {
    callback(arr);
}

myFilter(array, myCallback);

//with the array filter() method
const newArray = array.filter((value) => value.length > 4);

console.log(newArray);