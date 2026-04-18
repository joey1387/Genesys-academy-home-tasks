// QUESTION 1
interface product{
    name:string,
    price: number,
    inStock: boolean
};
const device1: product ={
    name: "iPhone 11",
    price: 500,
    inStock: true
};
const device2: product ={
    name: "iPhone 12",
    price: 1000,
    inStock:false
};

const availableProducts = (product: product): string => {
     if (product.inStock) {
     return`${product.name} is available for $${product.price}`
    } else{
     return `${product.name} is out of stock`;
    } 
};
console.log(availableProducts(device1));
console.log(availableProducts(device2));

// QUESTION 2 
const checkVALUE = (value: string | number): string | number =>{
   if (typeof value === 'number'){
     return value * 2;
}  else  
    (typeof value === 'string') 
     return value.toUpperCase()
};
 console.log(checkVALUE(10));
 console.log(checkVALUE("joey is good"));

 //QUESTION 3
    interface Person{
        name: string
    };
// const user:Person = {name: "Joseph"}
 interface Students extends Person {
     scores: number
 }
   const student:Students = { name: "Joseph", scores: 100}    
   
const studentScore = (student:Person & Students) => {
    console.log(`${student.name} scored ${student.scores}`)
}
  (studentScore(student))

  //QUESTION 4
  enum Role{
    Admin, 
    User, 
    Guest 
}
function action(position: Role) {
    switch(position){
        case Role.Admin:
            return "Full Access";
            case Role.User:
            return "Limited Access";
            case Role.Guest:
            return "No Access";
    }
}
console.log(action(Role.Admin));
console.log(action(Role.User));
console.log(action(Role.Guest));

// QUESTION 5
interface User{
    name: string
};
interface Contact{
    email: string
}
type Applicant = User & Contact

const getApplicant = (applicant: Applicant)=> {
    console.log (`${applicant.name} -  ${applicant.email}`)
}
getApplicant({name:"Joseph", email:"forghejoseph@gmail.com"})

//QUESTION 6
interface Student{
    name: string,
    score: number[];
};

const scholar: Student = {
     name: "Joseph",
     score:[100,20,80,100,50]
};
const studentSum = (score: number[]):number => {
return score.reduce((sum,num)=> sum + num, 0);
}
console.log(studentSum(scholar.score));

// QUESTION 7

function checkValue (Values: any ): string{
    if (typeof (Values) === 'number'){
    return'Number';
}
else if (typeof(Values) === 'string') {
        return 'String';
}
 else {
    return 'Unknown type'
}
}
console.log(checkValue(50));
console.log(checkValue("Joey is a boy"));
console.log(checkValue(false));