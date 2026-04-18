"use strict";
async function getUserData() {
    try {
        const response = await fetch("https://api.github.com/users/octocat");
        const info = await response.json();
        console.log(`${info.login} has ${info.public_repos} repos`);
    }
    catch (error) {
        if (error instanceof Error)
            console.log("error", error.message);
    }
}
getUserData();
async function checkBreed() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const breedOfDog = await response.json();
        console.log(`"Dog image: ${breedOfDog.message}"`);
    }
    catch (error) {
        if (error instanceof Error)
            console.log("error", error.message);
    }
}
checkBreed();
fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then((data) => {
    console.log("advice:" + data.slip.advice);
});
