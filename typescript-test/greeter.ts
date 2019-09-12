interface Person {
   firstName: String,
    lastName: String,
    age: Number,

};

function greeter(person: Person) {
    const { firstName, lastName, age } = person;
    return "Hello, " + firstName + ' ' + lastName + '. ' + 'Your age is ' + age;
}

let user = {
    firstName: 'Jai',
    lastName: 'Mehrotra',
    age: 37,
};

console.log(greeter(user));
