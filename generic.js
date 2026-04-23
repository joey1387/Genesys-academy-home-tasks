"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//GENERICS
function identity(value) {
    return value;
}
let result = identity(1);
console.log(result.toFixed());
//GENERICS WITH ARRAYS
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b"]));
//MULTIPLE GENERIC TYPES
function pair(a, b, c, d) {
    return [a, b, c, d];
}
console.log(pair(1, "hello", true, false));
const res = {
    data: ["a", "b", "c"],
    error: "error"
};
console.log(res);
//RECORD (BUILT -IN TYPESCRIPT)
const scores = {
    Alice: 90,
    Bob: 85
};
console.log(scores);
//inbuilt declaration
// type Record<K,V> = {
//     [key:K]: V;
// };
//GENERICS WITH CONSTRAINTS
//Sometimes you want to restrict what T can do
function getLength(item) {
    return item.length;
}
getLength([1, 2, 3]);
getLength("hello");
const users = {
    items: [
        { name: "John", age: 30 },
        { name: "Jane", age: 40 }
    ],
    total: 2
};
const valid = {
    item: "hello"
};
const valid2 = {
    item: [1, 2, 3]
};
const valid3 = {
    item: { name: "John", age: 30, length: 4 }
};
let numbers = [1, 2, 3];
let strings = ["a", "b", "c"];
let mixed = [1, "b", 3];
//GENERIC TYPES WITH ENUM
var Status;
(function (Status) {
    Status["success"] = "EKAMBA";
    Status["Error"] = "AKPONTO";
})(Status || (Status = {}));
function identity1(value) {
    return value;
}
console.log(identity1(Status.success));
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
function printColor(color) {
    return color;
}
console.log(printColor(Color.Red));
//# sourceMappingURL=generic.js.map