;
function greeter(person) {
    var firstName = person.firstName, lastName = person.lastName, age = person.age;
    return "Hello, " + firstName + ' ' + lastName + '. ' + 'Your age is ' + age;
}
var user = {
    firstName: 'Jai',
    lastName: 'Mehrotra',
    age: 37
};
console.log(greeter(user));
