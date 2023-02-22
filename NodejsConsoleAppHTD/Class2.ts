class demo {
    name: string
    speak(): void {
        console.log(this.name + "can speak 3 lang")
    }
}
var d = new demo()
d.name = "Yes I";
d.speak()




//------- Inheritance------
    class Animal1 {
        eat(): void {
            console.log("Eating")
        }
    }
class Dog extends Animal1 {
    bark(): void {
        console.log("Barking")
    }
}
class BabyDog extends Dog {
    weep(): void {
        console.log("Weeping")
    }
}
let obj1 = new BabyDog();
obj1.eat();
obj1.bark();
obj1.weep()

let obj2 = new Dog();
obj2.eat();


    class Persons {
        constructor(private firstName: string, private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        describe(): string {
            return `This is ${this.firstName} ${this.lastName}.`;
        }
    }

class Employee extends Persons {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        // call the constructor of the Person class:
        super(firstName, lastName);
    }
}

let employees = new Employee('John','Doe','Web Developer');

console.log(employees.getFullName());
console.log(employees.describe());

setInterval(() => {
    console.log();
}, 1000)