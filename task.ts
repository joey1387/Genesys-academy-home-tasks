// ASYNC AWAIT USING TYPESCRIPT
// interface todo {
//     userId:number,
//     id: number,
//     title: string,
//     completed: boolean
// }

// async function getUser() {
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   
//     const todos = await response.json();
//     todos.forEach((todo:todo ):void => console.log (todo.title))
    
//  } catch (error:any) {
//    if (error instanceof Error)
//     console.log("error", error.message);
//    }   
// }
// getUser() 

/////EXAMPLE 2
// interface factsOfCats{
//     fact: string
//     length:number
//    //  size: number
// }

// async function getUser1() {
//    try {
//     const response = await fetch("https://catfact.ninja/fact");
//     const catsFact:factsOfCats = await response.json();
//     console.log(catsFact.fact)
    
//  } catch (error:any) {
//    if (error instanceof Error)
//     console.log("error", error.message);
//    }   
// }
// getUser1() 
// EXAMPLE 3
interface Person{
    name:string,
    age:number,
    skills: string[];
}
const user: Person = {

   name:"Ada",
   age: 25,
   skills: ["JS"]
};

   const userSkills = (person:Person): void => {
    console.log(`${person.name} knows ${person.skills} and NODE and She is ${person.age}`)
};
userSkills(user)

// EXAMPLE 4
const ID = (id:string| number) => {
   if (typeof id === 'string'){
       console.log("string ID") 
   }
 else if (typeof id === 'number') 
 {
   console.log("Number ID")
 }
}
   
ID("JOEY")

// EXAMPLE 5 
const scores = [10,20,30,40];
const sumScores = (scores: number[]):number => {
const newScores = [...scores, 50];
return newScores.reduce((sum,num)=> sum + num, 0);
}
console.log(sumScores(scores))



