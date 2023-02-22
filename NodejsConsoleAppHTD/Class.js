/*------- Class WIth Function---------*/
class Person1 {
    //constructor
    constructor() {
        console.log("constr with 0 pm");
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    add() {
        var x = 45;
        var y = 50;
        var res = x + y;
        console.log(res);
    }
}
var p = new Person1();
p.firstName = "Brijesh";
p.lastName = "Bhargav";
console.log(p.getFullName());
p.add();
setInterval(() => {
    console.log();
}, 1000);
//# sourceMappingURL=Class.js.map