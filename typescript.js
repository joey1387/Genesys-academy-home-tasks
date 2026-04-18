"use strict";
;
const device1 = {
    name: "iPhone 11",
    price: 500,
    inStock: true
};
const device2 = {
    name: "iPhone 12",
    price: 1000,
    inStock: false
};
const availableProducts = (product) => {
    if (product.inStock) {
        return `${product.name} is available for $${product.price}`;
    }
    else {
        return `${product.name} is out of stock`;
    }
};
console.log(availableProducts(device1));
console.log(availableProducts(device2));
// QUESTION 2 
const checkVALUE = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else
        (typeof value === 'string');
    return value.toUpperCase();
};
console.log(checkVALUE(10));
console.log(checkVALUE("joey is good"));
;
const student = { name: "Joseph", scores: 100 };
const studentScore = (student) => {
    console.log(`${student.name} scored ${student.scores}`);
};
(studentScore(student));
//QUESTION 4
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function action(position) {
    switch (position) {
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
;
const getApplicant = (applicant) => {
    console.log(`${applicant.name} -  ${applicant.email}`);
};
getApplicant({ name: "Joseph", email: "forghejoseph@gmail.com" });
;
const scholar = {
    name: "Joseph",
    score: [100, 20, 80, 100, 50]
};
const studentSum = (score) => {
    return score.reduce((sum, num) => sum + num, 0);
};
console.log(studentSum(scholar.score));
// QUESTION 7
function checkValue(Values) {
    if (typeof (Values) === 'number') {
        return 'Number';
    }
    else if (typeof (Values) === 'string') {
        return 'String';
    }
    else {
        return 'Unknown type';
    }
}
console.log(checkValue(50));
console.log(checkValue("Joey is a boy"));
console.log(checkValue(false));
