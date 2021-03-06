"use strict";
//b) Design a function "implementing" this interface which returns an array with the three strings
function myFunc1(mf) {
    const array = [mf.a, mf.b, mf.c];
    return array;
}
const mf = { a: "a", b: "b", c: "c" };
console.log(myFunc1(mf));
//Do not make use of interface!!!!!
function myFunc2(a, b, c) {
    const array = [a, b, c];
    return array;
}
console.log(myFunc2("a", "b", "c"));
//c) Design another implementation that returns an array, with the three strings uppercased.
function myFunc3(mf) {
    const array = [mf.a.toUpperCase(), mf.b.toUpperCase(), mf.c.toUpperCase()];
    return array;
}
console.log(myFunc3(mf));
console.log("");
//d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.
//e) Test f2 with the two implementations created in b+c.
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = [myFunc2("1", "2", "3"), myFunc1(mf), myFunc3(mf)];
    //let [ a, b, c] = ["A", "B", "C"];
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(f1.a, f1.b, f1.c);
};
f2(mf);
//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface.
//f2(myFunc1("a", "b", "c"));
//# sourceMappingURL=interface2.js.map