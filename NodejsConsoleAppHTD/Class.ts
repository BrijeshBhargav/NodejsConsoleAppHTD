/*------- Class WIth Function---------*/
class Person1 {
    public ssn!: string;
    public firstName!: string;
    public lastName!: string;


    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    add(): void {
        var x = 45;
        var y = 50;
        var res = x + y;
        console.log(res);
    }
    //constructor
    constructor() {
        console.log("constr with 0 pm");

    }
}

var p = new Person1();
p.firstName = "Brijesh";
p.lastName = "Bhargav";
console.log(p.getFullName());
p.add();

setInterval(() => {
    console.log();
}, 1000)