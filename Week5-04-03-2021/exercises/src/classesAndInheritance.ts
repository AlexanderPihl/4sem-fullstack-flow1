
//A) The declaration below defines a Shape class, which as it's only properties has a
//color field +  a getArea() and a getPerimeter() function which both returns undefined. 
//This is the closest we get to an abstract method in Java.

abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;

    get color(): string {return this._color}
    set color(color: string) {this._color = color}

    toString(): string { return `Color : ${this.color}, Area : ${this.area}, Perimeter: ${this.perimeter}`}
  }

//B) Create a new class Circle that should extend the Shape class.

class Circle extends Shape{
    private _radius: number;
    constructor(radius: number, color: string)
    {
        super(color)
        this._radius = radius
    };

    get area():number { return Math.PI * Math.pow(this.radius, 2) };
    get perimeter(): any { return 2 * this.radius * Math.PI };

    get radius():number{return this._radius};
    set radius( radius: number){this._radius = radius};
}

let circle = new Circle(2, "green");
console.log(circle.toString());


//C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.
console.log('*** Excercise c ***');

class Cylinder extends Circle {
    private _height: number;

    constructor(color: string, radius: number, height: number) {
        super(radius, color);
        this._height = height;
    }

    get perimeter(): Error { return new Error("not implemented") };

    get volume(): number { return Math.PI * Math.pow(super.area, 2) * this.height }

    get height(): number { return this._height };
    set height(height: number) { this._height = height };

}

const cylinder = new Cylinder("Blue", 18, 36);

console.log(cylinder.toString());
console.log('Height: ' + cylinder.height);
console.log('Volume: ' + cylinder.volume);