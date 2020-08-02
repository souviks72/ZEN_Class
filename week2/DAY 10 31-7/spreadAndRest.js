const person = {
    firstName: 'Souvik',
    lastName: 'Mandal',
    age: 22,
    sex: 'M'
}

function joinFirstLastName(...person){
    return firstName + " " + lastName;
}

var lsit = [1,2,3];
var [a,b,c] = lsit;
[a,b] = [b,c];

const {firstName,lastName,age,sex} = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(sex);
console.log(`Full name: ${joinFirstLastName(person)}`);
