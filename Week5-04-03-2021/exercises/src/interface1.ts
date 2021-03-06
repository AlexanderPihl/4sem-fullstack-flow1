let http = require("http");

interface IBook {
    title:string;
    readonly author: string;
    published?: Date;       //e) Change the interface to make author readonly - Verify the new behaviour.
    pages?: number;
}

const book1: IBook = {
    title: "Garnet der aldrig blev strikket",
    author: "Gudrund Hansen",
    //published: new Date(),
    //pages: 126,
}

const book2: IBook = {
    title: "Slikkepinden der led af diabetes",
    author: "Gudrund Hansen",
    published: new Date(),
    pages: 50,
}

//Create a function that takes an IBook instance and test it with an object instance.
function logBook(book: IBook) {
    console.log(book);
}

logBook(book1);
console.log();
logBook(book2);

//"If it walks like a duck and it quacks like a duck, then it must be a duck"
//to determine whether an object can be used for a particular purpose. With normal typing, suitability is determined by an object's type.

//f) Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book implements IBook {
    //private _title : string;
    #title: string
    #author: string
    #published: Date
    #pages: number
    constructor(title: string,
        author: string,
        published: Date,
        pages: number) {
        this.#title = title
        this.#author = author
        this.#published = published
        this.#pages = pages
    }
    get title(): string { return this.#title }
    set title(title: string) { this.#title = title }
    get author(): string { return this.#author }
    set author(author: string) { this.#author = author }
    get published(): Date { return this.#published }
    set published(published: Date) { this.#published = published }
    get pages(): number { return this.#pages }
    set pages(pages: number) { this.#pages }
    toString(): string { return this.title + " " + this.author + " " + this.published + " " + this.pages }
}

//f) Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book2 implements IBook {
    constructor(
        private _title: string,
        private readonly _author: string,
        private _published: Date,
        private _pages: number
    ) {};

    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
    get author() {
        return this._author;
    }

    get published() {
        return this._published;
    }
    set published(published: Date) {
        this._published = published;
    }
    get pages() {
        return this._pages;
    }
    set pages(pages: number) {
        this._pages = pages;
    }
}

const b1 = new Book("Gunners sorte hat", "Gunner Nielsen", new Date(), 120);
console.log(b1.toString());




   