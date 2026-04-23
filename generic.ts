//GENERICS
// function  identity <T>(value:T): T{
//     return value;
// }
// let result = identity (3)
// console.log(result.toFixed())

// //GENERICS WITH ARRAYS
// function getFirst<T>(arr:T[]): T|undefined{
//     return arr[0];
// }
// console.log(getFirst<number>([1,2,3]));
// console.log(getFirst<string>(["a", "b"]));
 
// //MULTIPLE GENERIC TYPES
// function pair<T,K,C>(a:T, b: K, c:C, d:C):[T,K, C, C] {
//     return [a,b,c,d];
// }

// console.log(pair(1, "hello", true,false))

// //GENERICS INTERFACE WITH MULTIPLE TYPES
// interface ApiResponse<T,E>{
//     data:T;
//     error: E;
// }
// const res: ApiResponse<string[], string> ={
//     data: ["a", "b", "c"],
//     error: "error"
// };
// console.log(res)

// //RECORD (BUILT -IN TYPESCRIPT)
// const scores: Record<string,number> ={
//     Alice: 90,
//     Bob: 85
// };
// console.log(scores)

//inbuilt declaration
// type Record<K,V> = {
//     [key:K]: V;

// };

//GENERICS WITH CONSTRAINTS
//Sometimes you want to restrict what T can do
// function getLength<T extends{length:number}>(item:T): number{
// return item.length;

// }
// console.log(getLength([1,2,3]))
// console.log(getLength("hello"))
//getLength(12)



// //NESTED GENERICS
interface Paginated <T> {
    items: T[];
    total: number;
}
const users: Paginated<{name:string; age:number}> ={
    items:[
        {name: "John", age: 30},
        {name: "Jane", age: 40}
    ], 
    total: 2
};

// //CONSTRAINTS IN INTERFACES
// interface HasLength{
//     length: number;
// }
// interface Container<T extends HasLength>{
//     item: T; 
// }
// const valid: Container<string> ={
//     item: "hello"
// };
// const valid2: Container<number[]> ={
//     item: [1,2,3]
// };
// const valid3: Container<{name:string,age:number,length:number}> ={
//     item:{name: "John", age: 30, length: 4}
// }

// let numbers: Array<number> = [1,2,3];
// let strings: Array<string> = ["a", "b", "c"];
// let mixed: Array<number | string> = [1,"b", 3];

// //GENERIC TYPES WITH ENUM
// enum Status{
//     success = "EKAMBA",
//     Error = "AKPONTO"
// }

// function identity1<T>(value:T):T{
//     return value
// }
// console.log(identity1<Status>(Status.success))

// enum Color{
//     Red="red",
//     Blue="blue"
// }
// function printColor<T extends Color>(color:T): T{
//     return color;
// }
// console.log(printColor(Color.Red )) 