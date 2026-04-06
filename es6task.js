//ASSIGNMENT 1
const user = {
    name: "Ada",
    skills: ["JS", "Node"]
};
const ProcessUser = ({name,skills})=>{
const updatedSkills = [...skills,"React"]  

 return `${name} knows ${updatedSkills.join(",")}`
}
console.log(ProcessUser(user))
 
//ASSIGNMENT 2
const multiplyNumbers = (multiplier, ...numbers) => {
const collectedNumbers = [...numbers]      //copied numbers with spread operators
return collectedNumbers.map(num => num * multiplier)
}
console.log(multiplyNumbers(2,1,2,3))

//ASSIGNMENT 3
const student = {
    name: "John",
    scores: [70,80],
    details: {
        class: "SS3"
    }
};

const processStudent = ({
    name,scores,details: {class: studentClass}
}) =>{

const StudentScore =[...scores,90]
return `${name} in ${studentClass} scored ${StudentScore.join("-")}`
}; 
console.log(processStudent(student))

// ASSIGNMENT 4
const numbers = [1,2,3,4,5];
const processNumbers = (array) => {
const [fst,...rst]= array;
const updatedNumbers = [fst,...rst].map(num=> num*2);
return updatedNumbers;
}
console.log(processNumbers(numbers));

// ASSIGNMENT 5
const User ={
    name: "Ada",
    age: 25,
    role: "admin"
};
const updateUser = ({name, ...rest}) => {
    return {
        username: name,
        ...rest
    }
}
console.log(updateUser(User));

//ASSIGNMENT 6
const userN ={
    name: "Ada",
    address: {
        city: "Lagos"
    }
};
const cloneUser = (userN) => {
    const newUser = {
        ...userN, address: {
            ...userN.address, city: "Abuja"
        }
    }
    return newUser;
}
console.log(cloneUser(userN));

// The original object remains unchanged, because the spread operator makes a shallow copy,
// without copying address, both objects would share the same reference.

//ASSIGNMENT 7
const users =[
    {
        name: "Ada",
        skills: ["JS"]
    },
    {
        name: "Sam",
        skills: ["Python"]
    }
];
const ProcessUsers = (users) => {
    const [firstUser, ...remainingUsers] = users;  //array distructuring the firstuser + rest
    const updatedFirstUser = { //using spread to get first user skills
        ...firstUser,
         skills:[...firstUser.skills, "React"]
    }
  return{
    firstUser: updatedFirstUser, remainingUsers
  }
} 
console.log (ProcessUsers(users))

//ASSIGNMENT 8
const sumAll = (...numbers) => {
const Numbers2 = [...numbers];
const [first,...rest] = Numbers2
const sum = rest.reduce((sum,num) => sum + num, first)
return sum
}
console.log(sumAll(5,10,15))

// ASSIGNMENT 9
const data = {
    user: {
        info: {
            name: "Ada"
        },
        skills: ["JS"]
    }
}
const processData = (data) => {
    const {
        user: {
            info: { name },
            skills
        }
    } = data
    return {
        name, 
        skills: [...skills, "Node"]
    }
}
console.log(processData(data))

//ASSIGNMENT 10
const records =[
    {
        name: "Ada",
        scores: [10,20]
    },
    {
        name: "Sam",
        scores: [30,40]
    }
];

const processRecords = (records) => {
    const [first,...rest] = records
    const{name,scores} = first
    const combinedScores = [
        ...scores,
        ...rest.flatMap(({scores}) => scores) 
    ]
    return {
        name,
        scores: combinedScores
    }
}
console.log(processRecords(records))



    

     


