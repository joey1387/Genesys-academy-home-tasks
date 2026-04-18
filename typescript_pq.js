;
const user = {
    name: "Joseph",
    age: 20
};
function getUserCategory(user) {
    if (user.age < 18) {
        return "Minor";
    }
    else if (user.age >= 18 && user.age <= 60) {
        return "Adult";
    }
    else {
        return "Senior";
    }
}
;
console.log(getUserCategory(user));
//QUESTION 2
const processValue = (value) => {
    if (typeof value === 'number') {
        return `"Double: ${value * 2}"`;
    }
    else
        (typeof value === 'string');
    return `"Length: ${value.length}"`;
};
console.log(processValue(50));
console.log(processValue("Joy is coming"));
;
const productValues = [
    { id: 5, name: "Dangote cement", price: 1000 },
    { id: 6, name: "Bua cement", price: 800 }
];
const findProduct = (products, id) => {
    const product = products.find((product) => product.id === id);
    return product ? product.name : "not found";
};
console.log(findProduct(productValues, 6));
console.log(findProduct(productValues, 7));
// //QUESTION 4
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
function getPermissions(role) {
    switch (role) {
        case Role.Admin:
            return "Full access";
        case Role.Editor:
            return "Edit access";
        case Role.Viewer:
            return "Read-only access";
    }
}
console.log(getPermissions(Role.Admin));
console.log(getPermissions(Role.Editor));
console.log(getPermissions(Role.Viewer));
const myProject = [
    {
        title: "Logistics",
        amount: 10000
    },
    {
        title: "Decoration",
        amount: 20000
    }
];
const getTotalExpenses = (expenses) => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
};
console.log(getTotalExpenses(myProject));
async function fetchUserName() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const userData = await response.json();
        console.log(`"User: ${userData.name}"`);
    }
    catch (error) {
        if (error instanceof Error)
            console.log("error", error.message);
    }
}
fetchUserName();
async function fetchPostTitles() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const userPost = await response.json();
        return userPost.slice(0, 5).map(post => post.title);
    }
    catch (error) {
        return error;
    }
}
const data1 = await fetchPostTitles();
console.log(data1);
async function fetchIncompleteTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const userTodo = await response.json();
        return userTodo.filter(todo => !todo.completed).map(todo => todo.title);
    }
    catch (error) {
        if (error instanceof Error)
            console.log("error", error.message);
    }
}
const data = await fetchIncompleteTodos();
console.log(data);
//QUESTION 9
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("Request failed");
        }
        return "Success";
    }
    catch (error) {
        return "Error occured";
    }
}
const dataN = await fetchData();
console.log(dataN);
//QUESTION 10
export async function fetchUserAndTodo() {
    const [userRes, todores] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        fetch("https://jsonplaceholder.typicode.com/todos/1")
    ]);
    const user = await userRes.json();
    const todo = await todores.json();
    return `${user.name} - Todo:${todo.title}`;
}
const data2 = await fetchUserAndTodo();
console.log(data2);
