// // QUESTION 1
// interface product{
//     name:string,
//     price: number,
//     inStock: boolean
// };
// const device1: product ={
//     name: "iPhone 11",
//     price: 500,
//     inStock: true
// };
// const device2: product ={
//     name: "iPhone 12",
//     price: 1000,
//     inStock:false
// };

// const availableProducts = (product: product): string => {
//      if (product.inStock) {
//      return`${product.name} is available for $${product.price}`
//     } else{
//      return `${product.name} is out of stock`;
//     } 
// };
// console.log(availableProducts(device1));
// console.log(availableProducts(device2));

// // QUESTION 2 
// function checkVALUE (value: string | number):string | number{
//    if (typeof value === 'number'){
//      return value * 2;
// }  else if 
//     (typeof value === 'string') {
//      return value.toUpperCase();
// }
//    };
//  console.log(checkVALUE(10));
//  console.log(checkVALUE("joey is good"));

//  //QUESTION 3
//     interface Person{
//         name: string
//     };
// const user:Person = {name: "Joseph"}
//  interface Student extends Person {
//      score: number
//  }
//    const student:Student = { name: "Joseph", score: 100}    
   
// const studentScore = (student:Person & Student) => {
//     console.log(`${student.name} scored ${student.score}`)
// }
//   studentScore(student) 

//   //QUESTION 4
//   enum Role{
//     Admin, 
//     User, 
//     Guest 
// }
// function action(position: Role) {
//     switch(position){
//         case Role.Admin:
//             return "Full Access";
//             case Role.User:
//             return "Limited Access";
//             case Role.Guest:
//             return "No Access";
//     }
// }
// console.log(action(Role.Admin));
// console.log(action(Role.User));
// console.log(action(Role.Guest));

// // QUESTION 5
// interface User{
//     name: string
// };
// interface Contact{
//     email: string
// }
// type Applicant = User & Contact

// const getApplicant = (applicant: Applicant)=> {
//     console.log (`${applicant.name} -  ${applicant.email}`)
// }
// getApplicant({name:"Joseph", email:"forghejoseph@gmail.com"})

// //QUESTION 6
// interface Student{
//     name: string,
//     scores: number[];
// };

// const scholar: Student = {
//      name: "Joseph",
//      scores:[100,20,80,100,50]
// };
// const studentSum = (scores: number[]):number => {
// return scores.reduce((sum,num)=> sum + num, 0);
// }
// console.log(studentSum(scholar.scores));

//QUESTION 7
let Values: any = 50
if (typeof (Values) === 'number'){
    console.log(Values)
}
else if (typeof(Values) === 'string') {
        console.log(Values)
} else {
    console.log('Unknown type')
}
