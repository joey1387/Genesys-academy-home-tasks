"use strict";
// ASYNC AWAIT USING TYPESCRIPT
// interface todo {
//     userId:number,
//     id: number,
//     title: string,
//     completed: boolean
// }
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Ada",
    age: 25,
    skills: ["JS"]
};
const userSkills = (person) => {
    console.log(`${person.name} knows ${person.skills} and NODE and She is ${person.age}`);
};
userSkills(user);
// EXAMPLE 4
const ID = (id) => {
    if (typeof id === 'string') {
        console.log("string ID");
    }
    else if (typeof id === 'number') {
        console.log("Number ID");
    }
};
ID("JOEY");
// EXAMPLE 5 
const scores = [10, 20, 30, 40];
const sumScores = (scores) => {
    const newScores = [...scores, 50];
    return newScores.reduce((sum, num) => sum + num, 0);
};
console.log(sumScores(scores));
//# sourceMappingURL=task.js.map