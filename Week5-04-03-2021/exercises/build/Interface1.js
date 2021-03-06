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
var _title_1, _author_1, _published_1, _pages_1;
let http = require("http");
const book1 = {
    title: "Garnet der aldrig blev strikket",
    author: "Gudrund Hansen",
    //published: new Date(),
    //pages: 126,
};
const book2 = {
    title: "Slikkepinden der led af diabetes",
    author: "Gudrund Hansen",
    published: new Date(),
    pages: 50,
};
//Create a function that takes an IBook instance and test it with an object instance.
function logBook(book) {
    console.log(book);
}
logBook(book1);
console.log();
logBook(book2);
//"If it walks like a duck and it quacks like a duck, then it must be a duck"
//to determine whether an object can be used for a particular purpose. With normal typing, suitability is determined by an object's type.
//f) Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book {
    constructor(title, author, published, pages) {
        //private _title : string;
        _title_1.set(this, void 0);
        _author_1.set(this, void 0);
        _published_1.set(this, void 0);
        _pages_1.set(this, void 0);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _author_1, author);
        __classPrivateFieldSet(this, _published_1, published);
        __classPrivateFieldSet(this, _pages_1, pages);
    }
    get title() { return __classPrivateFieldGet(this, _title_1); }
    set title(title) { __classPrivateFieldSet(this, _title_1, title); }
    get author() { return __classPrivateFieldGet(this, _author_1); }
    set author(author) { __classPrivateFieldSet(this, _author_1, author); }
    get published() { return __classPrivateFieldGet(this, _published_1); }
    set published(published) { __classPrivateFieldSet(this, _published_1, published); }
    get pages() { return __classPrivateFieldGet(this, _pages_1); }
    set pages(pages) { __classPrivateFieldGet(this, _pages_1); }
    toString() { return this.title + " " + this.author + " " + this.published + " " + this.pages; }
}
_title_1 = new WeakMap(), _author_1 = new WeakMap(), _published_1 = new WeakMap(), _pages_1 = new WeakMap();
//f) Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book2 {
    constructor(_title, _author, _published, _pages) {
        this._title = _title;
        this._author = _author;
        this._published = _published;
        this._pages = _pages;
    }
    ;
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get author() {
        return this._author;
    }
    get published() {
        return this._published;
    }
    set published(published) {
        this._published = published;
    }
    get pages() {
        return this._pages;
    }
    set pages(pages) {
        this._pages = pages;
    }
}
const b1 = new Book("Gunners sorte hat", "Gunner Nielsen", new Date(), 120);
console.log(b1.toString());
//# sourceMappingURL=interface1.js.map