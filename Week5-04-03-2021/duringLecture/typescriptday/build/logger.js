"use strict";
//Af typen any som default
/*
function loggerV1(a, b){
    console.log(`Value 1: ${a}, value 2: ${b}`);
   }
   let a = 12, b = "Hello World";
   loggerV1(a, b);
*/
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
var _name;
function logger(a, b) {
    console.log(`Value 1: ${a.name}, value: 2 ${b.street}`);
}
class Person {
    constructor(name) {
        //private _name : String;
        _name.set(this, void 0); // # er private variabler
        __classPrivateFieldSet(this, _name, name);
    }
    get name() { return __classPrivateFieldGet(this, _name); } //giver mulighed for at ændre startværdien af name
    set name(name) { __classPrivateFieldSet(this, _name, name); }
    toString() { return __classPrivateFieldGet(this, _name); }
}
_name = new WeakMap();
class Address {
    constructor(street) { this._street = street; }
    get street() { return this._street; }
    set street(street) { this._street = street; }
    toString() { return this._street; }
}
let p1 = new Person("Kurt Wonnegut");
let a1 = new Address("Lyngby Hovedgade 23");
logger(p1, a1);
//-----------------------------------//
//Samme som loggerV1 bare dummere
function loggerV4(a, b) {
    console.log(`Value 1: ${a}, Value 2 ${b}`);
}
const a = 1;
const b = "hi";
loggerV4(a, b);
loggerV4(p1, a1);
//-----------------------------------//
//Array<T>
class GenericLogger {
    constructor() {
        this.log = (a, b) => console.log(`Value 1: ${a}, Value 2 ${b}`);
    }
    ;
}
let personLogger = new GenericLogger();
personLogger.log(p1, a1);
let whateverLogger = new GenericLogger();
whateverLogger.log(34, "asd");
//# sourceMappingURL=logger.js.map