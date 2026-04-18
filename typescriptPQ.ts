//QUESTION 1
interface User{
    name:string,
    age: number
};
const user: User ={
    name: "Joseph",
    age: 20
};

function getUserCategory (user:User):string {
    if(user.age < 18 ){
        return "Minor"
    } else if (user.age >=18 && user.age <=60){
        return "Adult"
    } else {
        return "Senior"
    }
};
console.log(getUserCategory(user))


//QUESTION 2
 const processValue = (value: string | number): string  =>{
 if (typeof value === 'number'){
    return `"Double: ${value*2}"`
 } else
 (typeof value === 'string')
 return `"Length: ${value.length}"`
 };
 console.log(processValue(50));
 console.log(processValue("Joy is coming"));


 // QUESTION 3
 interface Product{
    id: number
    name: string 
    price: number
 } ;
 const productValues: Product[]=[
    {id: 5, name: "Dangote cement", price: 1000},
    {id: 6, name: "Bua cement", price: 800}
 ]
 const findProduct = (products:Product[], id:number) => {
    const product = products.find((product:Product)=> product.id=== id);
    return product?product.name: "not found"
 }
 console.log(findProduct(productValues, 6))
 console.log(findProduct(productValues, 7))

// //QUESTION 4
enum Role{
    Admin, 
    Editor, 
    Viewer 
}
function getPermissions(role: Role) {
    switch(role){
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


// QUESTION 5
interface Expense{
    title: string
    amount: number
}
const myProject: Expense[] = [
{ 
    title: "Logistics",
    amount: 10000
},
{
    title: "Decoration",
    amount: 20000
}
]; 
const getTotalExpenses = (expenses:Expense[]): number => {
    return expenses.reduce((sum, expense)=> sum + expense.amount, 0);
}
console.log(getTotalExpenses(myProject))



//QUESTION 6
interface User2{
    id: number
    name: string
}

async function fetchUserName(): Promise <void> {
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/users/1");
        const userData:User2 = await response.json();
        console.log(`"User: ${userData.name}"`)
    }catch (error:any){
        if (error instanceof Error)
        console.log("error", error.message);
    }
}
fetchUserName()



//QUESTION 7
interface Post{
    id: number;
    title: string;
}
async function fetchPostTitles(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const userPost: Post[] = await response.json();
        return userPost.slice(0, 5).map( post => post.title)
               
}
catch (error){
    return error
}
}
const data1 = await fetchPostTitles()
         console.log(data1)




//QUESTION 8
      interface Todo {
        id: number,
        title: string,
        completed: boolean
      } 
      async function fetchIncompleteTodos(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
        const userTodo:Todo []= await response.json();
       return userTodo.filter(todo => !todo.completed).map(todo => todo.title);
    }
        catch (error:any){
        if (error instanceof Error)
        console.log("error", error.message);
    }
}
const data = await fetchIncompleteTodos()
console.log(data)



//QUESTION 9
async function fetchData() {
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
        if (! response.ok){
            throw new Error ("Request failed");
        }
        return "Success";
    } catch (error){
        return "Error occured";
    }
}
const dataN = await fetchData()
console.log(dataN)




//QUESTION 10
export async function fetchUserAndTodo(): Promise<string> {
    const [userRes, todores] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        fetch ("https://jsonplaceholder.typicode.com/todos/1")
    ]);
    const user=await userRes.json();
    const todo = await todores.json();
    return `${user.name} - Todo:${todo.title}`;
}
const data2 = await fetchUserAndTodo()
    console.log(data2)









export {} 