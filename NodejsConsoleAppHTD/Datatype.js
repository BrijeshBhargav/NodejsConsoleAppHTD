console.log('Datatype class Hello world');
let first = 123; // number 
console.log('number example :' + first); // 123
let myNumber = 123;
myNumber.toString(); // returns '123'
console.log('number example :' + myNumber); // 123
let employeeName = 'Brijesh Bharagav';
//OR
let employeeName2 = "John Smith";
console.log("string ex:" + employeeName);
console.log("string ex:" + employeeName2);
let employeeName3 = "Brijesh ";
let employeeDept = "Software Developer";
let employeeDesc1 = employeeName3 + " works in the " + employeeDept + " department.";
console.log(employeeDesc1);
let str = 'Hello TypeScript';
str.charAt(2); // returns 'H'
console.log(str.charAt(0));
let str1 = 'Hello';
let str2 = 'TypeScript';
str1.concat(str2); // returns 'HelloTypeScript'
console.log("concat ex :" + str1.concat(str2));
let stri = 'TypeScript';
stri.indexOf('T'); // returns 0
stri.indexOf('p'); // returns 2
console.log("index ex :" + stri.indexOf('p'));
let str3 = 'Hello Javascript';
let str4 = 'TypeScript';
str3.replace('Java', 'Type'); // returns 'Hello TypeScript'
str4.replace('JavaScript', str4); // returns 'Hello TypeScript'
console.log(str3.replace('Java', 'Type'));
let fruits;
fruits = ['Apple', 'Orange', 'Banana',];
console.log("Array ex :" + fruits);
let values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// or 
let values2 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(values);
var empId = 1;
var empName = "Steve";
// Tuple type variable 
var employee = [1, "Steve"];
console.log("Tuple Ex :" + employee);
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
console.log(user);
let something = "Hello World!";
something = 23;
console.log(something);
let arr = ["John", 212, true];
arr.push("Smith");
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
setInterval(() => {
    console.log();
}, 1000);
//# sourceMappingURL=Datatype.js.map