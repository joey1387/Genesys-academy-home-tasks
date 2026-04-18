// QUESTION 8
interface userData {
    login: "string",
    public_repos: number
}
async function getUserData() {
    try {
     const response = await fetch ("https://api.github.com/users/octocat");
     const info: userData = await response.json();
     console.log(`${info.login} has ${info.public_repos} repos`)   
    } catch (error:any){
        if (error instanceof Error)
        console.log("error", error.message);
    }
}
getUserData()

// QUESTION 9
interface dogMessage {
    message: string

}
async function checkBreed (){
    try{
        const response = await fetch ("https://dog.ceo/api/breeds/image/random");
        const breedOfDog: dogMessage = await response.json();
        console.log(`"Dog image: ${breedOfDog.message}"`)
    }catch (error:any){
        if (error instanceof Error)
        console.log("error", error.message);
    }
}
checkBreed()

// QUESTION 10
//Promises  
interface advice {
    slip : {
        id: number;
        advice:string;
    };
}
 fetch ("https://api.adviceslip.com/advice") 
    .then(res => res.json())
    .then((data: any)=> {
    console.log("advice:"+ data.slip.advice)
 });