// javascript variables
//var person = "Sheila"; //string
//let animals = []; //array

//person = animals;   //cannot assign, but can use
//animals = person;   //values interchangeable - valid js

//person = 123;   //js woudl allow, ts does not


//Typscript varianles
//need to have a type

let firstName: any = "John"; //strongly typing firstname - make "any" type instead of string (converts to any type of JS) - canstore strings, NUMs, arrays, etc
let height: number = 6;
let isDone: boolean = false;

firstName = height; //invalid TS - can see error and can fix before it hits production

//to bypass error use "any" type, but don't get benefit of TS that allows error checking
//--------------------------------------------------------

//OO TYPESCRIPT features
//niterfaces, code completion

//interfaces
interface IVehicle {        //needs to implement the following features
    wheels: number;
    engine: string;
    drive();
}

//classes
class Car implements IVehicle {
    wheels: number;     //knows that we need to follow Car interface above
    engine: string;

    //constructor
    constructor(wheels: number, engine: string) {
            this.wheels = wheels;
            this.engine = engine;
    }

    drive() {
        console.log('Driving...')
    }
}

//to instantiate above class
let myCar = new Car(4, 'v8');

myCar.drive;    //to run implementation

//to 