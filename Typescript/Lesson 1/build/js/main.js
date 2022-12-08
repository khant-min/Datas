"use strict";
// regular expression
let re = /\w+/g;
// Array
let stingArr = ["one", "two", "three"];
let guitars = ["start", "lea paul", 1980];
const mixedData = ["evh", 1222, false];
// string array
let bands = [];
bands.push("te");
/// Tuple
// can store exact positions
let myTuple = ["Dave", 23, true];
// let mixed: [string, number, boolean] = ["join", 22, false];
let mixed = ["join", 22, false];
myTuple[1] = 23;
// myTuple = mixed;
// Object
let myObj;
myObj = []; /// can assign an array because array is an object
const exampleObj = {
  prop1: "dave",
  prop2: true,
};
exampleObj.prop1 = "23";
let evh = {
  name: "Eddie",
  albums: [1222, 2322, "oulet"],
  active: false,
  //   albums: [1222, 2322, "oulet"],
};
let jp = {
  // name: "Lu Zoe",
  active: true,
  albums: ["I", "II", "III"],
};
evh = jp;
const greetGutarist = guitarist => {
  var _a;
  return `Hello ${
    (_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()
  }`;
};
console.log(greetGutarist(jp));
// Enums
/*
  Unlike most typescript features, Enums are not a type-level addition to JavaScript,
  but sometimes added to the language and runtime.
*/
var Grade;
(function (Grade) {
  Grade[(Grade["U"] = 0)] = "U";
  Grade[(Grade["D"] = 1)] = "D";
  Grade[(Grade["C"] = 2)] = "C";
  Grade[(Grade["B"] = 3)] = "B";
  Grade[(Grade["A"] = 4)] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// literal types
let myName;
// we can only set my name to khant
let userName;
// can only use any of these three types
userName = "dave";
let test;
// functions
const add = (a, b) => {
  return a + b;
};
// es6 function
const logMsg = message => {
  console.log(message);
};
logMsg("hello");
logMsg(add(2, 4));
// normal function
let substract = function (c, d) {
  return c - d;
};
let multiply = function (c, d) {
  return c + d;
};
logMsg(multiply(3, 2));
// optional parameters
// optional parameters need to be the last in the list we required parameters do need to come first
const addAll = (a, b, c) => {
  // type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
// default parameters value
const sumAll = (a = 10, b, c = 2) => {
  return a + b + c;
};
logMsg(addAll(2, 3, 5));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 4));
logMsg(sumAll(undefined, 4));
// function signatures cannot do with default values
// Rest Parameters
const total = (a, ...nums) => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// never type
// never type is used for errors
const createError = errMsg => {
  throw new Error(errMsg);
};
// if a function has an infinite loop or endless loop inside, it will also be never type
const infinite = () => {
  let i = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
// custom type guard
const isNumber = value => {
  return typeof value === "number" ? true : false;
};
const numberOrString = value => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
// convert to more or less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific type
// we can also use angle brackets
// in tsx files we cannot use this way
let d = "hello";
let e = "hello";
const addOrConcat = (a, b, c) => {
  if (c === "add") return a + b;
  return "" + a + b;
};
// type assertions mean 'hey ignore the warning, we know we are returning a string'
let myVal = addOrConcat(2, 3, "concat");
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 3, "concat");
console.log(nextVal);
