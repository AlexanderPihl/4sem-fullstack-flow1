"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _val;
/* a) Implement a generic function which will take an array of any kind,
and return the array reversed (just use the built-in reverse function),
so the three first calls below will print the reversed array, and the last call will fail. */
function reverseArr(arg) {
    return arg.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
//console.log(reverseArr<number>(["a","b","c"]));
//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder {
    constructor(val) { this.val = val; }
    ;
    getValue() { return this.val; }
    ;
    setValue(val) { this.val = val; }
    ;
}
let d1 = new DataHolder("Hello");
console.log(d1.getValue());
d1.setValue("World");
console.log(d1.getValue());
//d1.setValue(123);
let d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
//d2.setValue("500");
//c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods.
class DataHolderTwo {
    constructor(val) {
        _val.set(this, void 0);
        __classPrivateFieldSet(this, _val, val);
    }
    ;
    get value() { return __classPrivateFieldGet(this, _val); }
    ;
    set value(val) { __classPrivateFieldSet(this, _val, val); }
    ;
    toString() { return __classPrivateFieldGet(this, _val); }
}
_val = new WeakMap();
let d3 = new DataHolderTwo("I like");
console.log(d3.toString());
d3.value = "Pie";
console.log(d3.toString());
//# sourceMappingURL=generics.js.map