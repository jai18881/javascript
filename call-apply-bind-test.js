const person = {
    name: 'Alex',
    greet() {
        console.log('Hey my name is ' + this.name)
    }
};

const person1 = {
    name: 'Jai',
    greet: person.greet,
}

person.greet(); // Hey my name is Alex

person.greet.call(person1); // Hey my name is Jai

person.greet.apply(person1); // Hey my name is Jai

person.greet.bind(person1); // Hey my name is Jai

const newPerson = person.greet.bind(person1);

newPerson(); // Hey my name is Jai

person1.greet(); // Hey my name is Alex

person1.greet.call(person); // Hey my name is Alex

person1.greet.apply(person); // Hey my name is Alex

const newPerson1 = person1.greet.bind(person)

newPerson1(); // Hey my name is Alex
