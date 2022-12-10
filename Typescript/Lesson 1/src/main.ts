// regular expression
let re: RegExp = /\w+/g;

// Array
let stingArr = ["one", "two", "three"];

let guitars = ["start", "lea paul", 1980];

const mixedData = ["evh", 1222, false];

// string array
let bands: string[] = [];
bands.push("te");

/// Tuple
// can store exact positions
let myTuple: [string, number, boolean] = ["Dave", 23, true];

// let mixed: [string, number, boolean] = ["join", 22, false];
let mixed = ["join", 22, false];

myTuple[1] = 23;

// myTuple = mixed;

// Object

let myObj: object;

myObj = []; /// can assign an array because array is an object

const exampleObj = {
  prop1: "dave",
  prop2: true,
};

exampleObj.prop1 = "23";

// type and interface keyword in ts
// type and interface do the same thing

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  albums: [1222, 2322, "oulet"],
  active: false,
  //   albums: [1222, 2322, "oulet"],
};

let jp: Guitarist = {
  // name: "Lu Zoe",
  active: true,
  albums: ["I", "II", "III"],
};

evh = jp;

const greetGutarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}`;
};

console.log(greetGutarist(jp));

// Enums
/*
  Unlike most typescript features, Enums are not a type-level addition to JavaScript,
  but sometimes added to the language and runtime.
*/

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

// Type Alias

// union type
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitar = {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
  // using type alias inside of another type alias
};

// difference between interface and type is interface can't do this
type UserId = stringOrNumber;

// literal types
let myName: "khant";
// we can only set my name to khant

let userName: "dave" | "join" | "any";
// can only use any of these three types
userName = "dave";

let test: 2 | 3 | 5;

// functions

const add = (a: number, b: number): number => {
  return a + b;
};

// es6 function
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hello");
logMsg(add(2, 4));

// normal function
let substract = function (c: number, d: number): number {
  return c - d;
};

// function signature
// type alias for functions
// type mathFunction = (a: number, b: number) => number;

// interface alias for functions
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c + d;
};

logMsg(multiply(3, 2));

// optional parameters
// optional parameters need to be the last in the list we required parameters do need to come first
const addAll = (a: number, b: number, c?: number): number => {
  // type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default parameters value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 5));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 4));
logMsg(sumAll(undefined, 4));

// function signatures cannot do with default values

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));

// never type
// never type is used for errors

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// if a function has an infinite loop or endless loop inside, it will also be never type
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};

// type assertions

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific type

// we can also use angle brackets
// in tsx files we cannot use this way
let d = <One>"hello";
let e = <string | number>"hello";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// type assertions mean 'hey ignore the warning, we know we are returning a string'
let myVal: string = addOrConcat(2, 3, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 3, "concat") as number;
console.log(nextVal);

// unknown type assertion
// unknown type overrules ts
// 10 as string;

// double casting or force casting - simply refered to as two assertions
10 as unknown as string;

// type assertions very useful for DOM
// The DOM

const img = document.querySelector("img") as HTMLImageElement;
// const img = document.querySelector("img")!

// using an exclamation mark is called a non-null assertion
// const myImg = document.getElementById("#img")!;
const myImg = document.getElementById("#img") as HTMLIFrameElement;

// this way will not work in tsx files
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
nextImg.src;

// classes

// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }

// in dry way
class Coder {
  // can also do this
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `Hello, I'm, ${this.name}`;
  }
}

const Dave = new Coder("dave", "rock", 23);

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarists implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarists("jimmy", "guitar");
console.log(Page.play("strums"));

// Index signatures

interface TransationObj {
  Pizza: number;
  Books: number;
  Job: number;
}

const todayTransation: TransationObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

const echo = <T>(arg: T): T => arg;

// function greet(person: string, date: Date) {
//   console.log(date.toLocaleDateString());
// }
