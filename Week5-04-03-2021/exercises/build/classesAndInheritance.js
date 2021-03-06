"use strict";
//A) The declaration below defines a Shape class, which as it's only properties has a
//color field +  a getArea() and a getPerimeter() function which both returns undefined. 
//This is the closest we get to an abstract method in Java.
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
    set color(color) { this._color = color; }
    toString() { return `Color : ${this.color}, Area : ${this.area}, Perimeter: ${this.perimeter}`; }
}
//B) Create a new class Circle that should extend the Shape class.
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this._radius = radius;
    }
    ;
    get area() { return Math.PI * Math.pow(this.radius, 2); }
    ;
    get perimeter() { return 2 * this.radius * Math.PI; }
    ;
    get radius() { return this._radius; }
    ;
    set radius(radius) { this._radius = radius; }
    ;
}
let circle = new Circle(2, "green");
console.log(circle.toString());
//# sourceMappingURL=classesAndInheritance.js.map