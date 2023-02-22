class demo {
    speak() {
        console.log(this.name + "can speak 3 lang");
    }
}
var d = new demo();
d.name = "Yes I";
d.speak();
//------- Inheritance------
class Animal1 {
    eat() {
        console.log("Eating");
    }
}
class Dog extends Animal1 {
    bark() {
        console.log("Barking");
    }
}
class BabyDog extends Dog {
    weep() {
        console.log("Weeping");
    }
}
let obj1 = new BabyDog();
obj1.eat();
obj1.bark();
obj1.weep();
let obj2 = new Dog();
obj2.eat();
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Persons {
    constructor(firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
}
let employees = new Employee('John', 'Doe', 'Web Developer');
console.log(employees.getFullName());
console.log(employees.describe());
setInterval(() => {
    console.log();
}, 1000);
//# sourceMappingURL=Class2.js.map