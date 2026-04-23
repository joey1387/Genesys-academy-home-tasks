// let boy: string = "John"
// let id: number = 1
// let isPublished: boolean=true
// let x:any=4

// console.log(x)
// console.log(boy)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let ids:number[]=[1,2,3,4,5];
// let xArr: any[]= [1, "Hello", true];
// ids.push(6);

// console.log(ids);
// console.log(xArr);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const concatinate =(a:number,b: number) => {
//    return a + b
// }

// console.log(concatinate(9,10))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function greet(message:string):void{
//     console.log(message)
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//uknown
// let value:unknown= 9
// if(typeof(value)=== "string"){
//     console.log(value.toUpperCase())
// }
// else{
//     console.log("not correct")
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //never
// function throwError(message:string): never{
//     throw new Error (message)
// }
// throwError("name")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FRIDAY4/10/26

// GIVING A TYPE TO VARIABLES IN AN OBJECT.
// const user = { age:number, name:string} = {age:20, name:"joey"}
    
// const boy:string="john"     WRONG WRONG WRONG WRONG
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// type User = {age:number, name:string}

// const user:User={age:3, name: "Doe"}
// const user2:User={age:4, name: "Doe"}  //RIGHT RIGHT RIGHT RIGHT
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // //INTERFACE TYPE
// interface Person {
//     id:number
//     name: string
//     isPublished : boolean
//     age?: number 
// }

// const user3:Person= {id: 1, name: "John", isPublished: true, age:25}
// const user4:Person= {id: 2, name: "Doe", isPublished: false}

// console.log(user3)
// console.log(user4)
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// interface job extends Person {
//     office: string,
//     title: string
// }
// const job:job={id:1, name:"John", isPublished: true, office: "Microsoft", title: "Developer"}

// console.log(job)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UNION AND INTERSECTION EXAMPLE
//Union
// const printID = (id:string| number) => {
//     console.log("ID: " + id)
// }

// printID("20")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//multiple or complex union example
// type ID = string|number|boolean

// const printID2 = (id:ID) => {
//     console.log("ID: " + id)
// }
// printID2(false)

// //function example
// interface businessPartner{
//     name:string,
//     creditScore: number
// }

// interface Person{
//     id:number, 
//     email:string
// }
// type Customer= businessPartner & Person

// const signContract = (person:Customer)=> {
//     console.log(`${person.name} has a credit score of ${person.creditScore} has the email ${person.email}`)
// }
// signContract ({name:"lota", creditScore:100, email:"infodev@gmail.com", id: 1})

// enum LoginError{
//     ok = 402,
//     unauthorized = 401,
//     notFound = 404,
//     serverError = 500,
// }
// const printErrorMsg = (error: LoginError) => {
//     if (error === LoginError.unauthorized){
//         console.log("unauthorized")
//     }
//     else if (error=== LoginError.ok){
//         console.log("ok")
//     }
//     else if (error=== LoginError.notFound){
//         console.log("not Found")
//     }
//     else if (error=== LoginError.serverError){
//         console.log("server error")
//     }
// }

// printErrorMsg(LoginError.unauthorized)

// //enums string
// enum Role {
//     Admin = "ADMIN",
//     User = "USER",
//     Guest = "GUEST"
// }
// const currentRole: Role = Role.User;
// console.log(currentRole)

// //Enum Swtch/case
// enum TrafficLight {
//     Red,
//     Yellow,
//     Green
// }

// function action(light: TrafficLight) {
//     switch(light){
//         case TrafficLight.Red:
//             return "Stop";
//             case TrafficLight.Yellow:
//             return "Get Ready";
//             case TrafficLight.Green:
//             return "Go";
//     }
// }
// console.log(action(TrafficLight.Green))

enum ApiStatus {
    Success = "success",
    Error = "error",
    Loading = "loading"
}
//type literals
type Properties = "house"|"car"|"bike"|"plane"|"ship"

type ApiResponse = {
    status: ApiStatus;
    //data?: string;
    data?: Properties;
};

const response: ApiResponse ={
    status:ApiStatus.Success,
    data: "house"
};
console.log(response)