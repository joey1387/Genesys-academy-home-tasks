//QUESTIOM 1
 function  identity <T>(value:T): T{
  return value;
 }
 let result = identity(3)
 let result1 = identity("Genesys Academy")
 let resul3 = identity(false)

console.log(result)
console.log(result1)
console.log(resul3)

//QUESTION 2
function getFirstElement<T>(arr:T[]): T|undefined{
     return arr[0];
}
 console.log(getFirstElement<number>([1,2,3,5,6]));
console.log(getFirstElement<string>(["a", "b", "c", "d"]));

//QUESTION 3
interface ApiResponse<T> {
    data:T;
    success: boolean;
}
//creating user response
const userRes: ApiResponse<{name: string}> ={
    data: {name: "Joey"},
    success: true,
};
// creating number response
const numbRes: ApiResponse<number[]>={
    data: [2,4,6,8,10],
    success: true,
}
console.log(userRes);
console.log(numbRes)


//QUESTION 4
 function getLength<T extends{length:number}>(item:T): number{
return item.length;

}
console.log(getLength([3,6,9,12,15]))
console.log(getLength("Congratulations"))
// I tried with an object and just numbers outside an array, it didn't give an item length, because they don't have.

//QUESTION 5
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const property = {name: "Joseph", age: 20, track: "Front End"}
console.log(getProperty(property, "name"))
console.log(getProperty(property, "age"))
console.log(getProperty(property, "track"))

//QUESTION 6
function mapArray<T, U>(
  arr: T[],
  callback: (item: T, index: number, array: T[]) => U): U[] {
  const result: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]!, i, arr)); // i used ! because the value is not undefined
  }
  return result;
}
// map through the array and multiply numbers in the array by 3
const array =[2,6,9,5];
console.log(mapArray(array,(num)=> num*3))
// map through an object in an array and get the parameters
//just playin with what we have been taught.
const users = [{name: "Joseph", age: 20, score: 100}, {name: "Bassy", age: 21, score: 100}]
console.log(mapArray(users, (user) => `${user.name} is ${user.age} and he scored ${user.score}`))
//The idea is for the output to produce a new  array.

//QUESTION 7
    class Storage <T> {
        private items: T[] = [];
        addItem(item: T): void {
            this.items.push(item);
        }
        removeItem(item:T): void {
            this.items = this.items.filter(i => i !==item);
        }
        getItems(): T[] {
        return this.items;
        }
    }
    //Properties in a string type array
    const Property1 = new Storage<string>();
    Property1.addItem("Biscuits");
    Property1.addItem("Sweets");
    Property1.addItem("Peanuts");

    Property1.removeItem("Sweets");

    // Properties in a number type array
    const Propery2 = new Storage<number>();
    Propery2.addItem(20);
    Propery2.addItem(10);
    Propery2.addItem(30);

    Propery2.removeItem(30);

//Console.log Properties
    console.log(Property1.getItems())
    console.log(Propery2.getItems())

    //QUESTION 8
      async function handlePromise<T>(promise:Promise<T>): Promise< {
        data: T|null;
        error: string|null;
      }> {
        try{
            const result = await promise;
            return{
                data: result,
                error: null
            };
        } catch (err: any){
            return {
                data: null,
                error: err.message || "Something went wrong"

            };
        }
      }
      /// I figured in this question, the function is just a tool and it doesnt run itself , another a second function  calling it, will
      /// make it work... i don't know if i explained it better.

      //QUESTION 9
      function reduceArray <T, U>(
        arr: T[],
        callback: (acc: U, current: T) => U,
        initialValue: U
      ): U{
        let accumulator = initialValue;

        for(let i=0; i< arr.length; i++){
            accumulator = callback(accumulator, arr[i]!);
        }
        return accumulator;
      }
      const numbers = [3,7,6,7]
      const sum = reduceArray(numbers, (acc, current) => acc + current, 0);
      console.log(sum)
        
      //QUESTION 10
      type EventMap = {
     userLogin: { username: string };
     orderPlaced: { orderId: number };
    };

    class EventEmitter<T extends Record<string, any>> {
     private events: {
    [K in keyof T]?: ((data: T[K]) => void)[];
    } = {};

  on<K extends keyof T>(eventName: K, callback: (data: T[K]) => void) {
  if (!this.events[eventName]) {
  this.events[eventName] = [];
}
this.events[eventName]!.push(callback);
 }

 emit<K extends keyof T>(eventName: K, data: T[K]) {
const handlers = this.events[eventName];
if (handlers) {
 handlers.forEach((cb) => cb(data));
 }
}}
const emitter = new EventEmitter<EventMap>();
emitter.on("userLogin", (data) => {
  console.log("User logged in:", data.username);

});
emitter.emit("userLogin", { username: "Joseph" });

// emitter.emit("userLogin", { orderId: 123 }); THIS WILL GIVE AN ERROR


// QUESTION 11
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
interface User {
  id: number;
  name: string;
  email: string;
};

type UserPicker= MyPick<User, "id" | "name">;

const user: UserPicker ={
  id: 1,
  name: "Joseph"
};

console.log(user)