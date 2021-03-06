
//Af typen any som default
/*
function loggerV1(a, b){
    console.log(`Value 1: ${a}, value 2: ${b}`);
   }
   let a = 12, b = "Hello World";
   loggerV1(a, b); 
*/

//-----------------------------------//
   
   /*
  function logger(a:number, b:string){
    console.log(`Value 1: ${a}, value 2: ${b}`);
   }
   let a = 12, b = "Hello World";
   logger(a, b);
   */

//-----------------------------------//

interface IPerson {name:string}
interface IAddress {street: string}

function logger (a:IPerson, b:IAddress){
    console.log(`Value 1: ${a.name}, value: 2 ${b.street}`);
}

class Person implements IPerson {                   //Klasse som minder lidt om java
    //private _name : String;
    #name: string                                   // # er private variabler
    constructor (name: string){this.#name = name}
    get name():string {return this.#name}           //giver mulighed for at ændre startværdien af name
    set name(name:string) {this.#name= name}
    toString():string {return this.#name}
  }
   
  class Address implements IAddress {
    //private _name : String;
    _street: string
    constructor (street: string){this._street = street}
    get street():string {return this._street}
    set street (street:string) {this._street= street}
    toString():string {return this._street}
  }
  
  const p1 = new Person("Kurt Wonnegut");
  const a1= new Address("Lyngby Hovedgade 23");
  logger(p1,a1);

//-----------------------------------//

//Samme som loggerV1 bare dummere
  function loggerV4<T,U>(a: T, b:U){
      console.log(`Value 1: ${a}, Value 2 ${b}`)
  }
  const a = 1;
  const b = "hi";
  loggerV4(a,b);
  loggerV4(p1,a1);

//-----------------------------------//

//Array<T>
class GenericLogger<T, U>{
    constructor(){};
    log = (a: T, b: U) => console.log(`Value 1: ${a}, Value 2 ${b}`)
}

const personLogger = new GenericLogger<IPerson, IAddress>();
personLogger.log(p1, a1);

const whateverLogger = new GenericLogger<number, string>();
whateverLogger.log(34, "asd");
