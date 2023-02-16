//Hello objects

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;



//Check for emptiness

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}



//Sum object properties

let sum = 0;

for (let i in salaries) {
    sum += salaries[i];
}

alert(sum);



//Multiply numeric property values by 2

function multiplyNumeric(obj) {
    for (let i in obj) {
        if (typeof(obj[i] === "number")) {
            obj[i] *= 2;
        }
    }
}