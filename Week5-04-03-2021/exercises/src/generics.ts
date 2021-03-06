
/* a) Implement a generic function which will take an array of any kind, 
and return the array reversed (just use the built-in reverse function), 
so the three first calls below will print the reversed array, and the last call will fail. */
function reverseArr<T>(arg: T[]): T[]{
   return arg.reverse();
}
console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"]));


//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder<T> {
    val: T;
    constructor(val: T) { this.val = val };
    getValue() { return this.val };
    setValue(val: T) { this.val = val };
}

let d1 = new DataHolder<string>("Hello");
console.log(d1.getValue());
d1.setValue("World");
console.log(d1.getValue());

//d1.setValue(123);

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());

//d2.setValue("500");

//c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods.
class DataHolderTwo<T> {
    #val: T
    constructor(val: T) { this.#val = val };
    get value(): T { return this.#val };
    set value(val: T) { this.#val = val };

    toString(): T { return this.#val }
}

let d3 = new DataHolderTwo<string>("I like");
console.log(d3.toString());
d3.value = "Pie";
console.log(d3.toString());