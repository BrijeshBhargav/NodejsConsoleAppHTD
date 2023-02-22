console.log('Datatype class Hello world');


let first: number = 123; // number 
console.log('number example :'+first);  // 123

let myNumber: number = 123;
myNumber.toString(); // returns '123'
console.log('number example :' + myNumber);  // 123

let employeeName: string = 'Brijesh Bharagav';
//OR
let employeeName2: string = "John Smith";
console.log("string ex:" + employeeName)
console.log("string ex:" + employeeName2)


let employeeName3: string = "Brijesh ";
let employeeDept: string = "Software Developer";

let employeeDesc1: string = employeeName3 + " works in the " + employeeDept + " department.";
console.log(employeeDesc1)


let str: string = 'Hello TypeScript';
str.charAt(2); // returns 'H'
console.log(str.charAt(0))

let str1: string = 'Hello';
let str2: string = 'TypeScript';
str1.concat(str2); // returns 'HelloTypeScript'
console.log("concat ex :" + str1.concat(str2))

let stri: string = 'TypeScript';

stri.indexOf('T'); // returns 0
stri.indexOf('p'); // returns 2
console.log("index ex :" + stri.indexOf('p'))

let str3: string = 'Hello Javascript';
let str4: string = 'TypeScript';

str3.replace('Java', 'Type'); // returns 'Hello TypeScript'
str4.replace('JavaScript', str4); // returns 'Hello TypeScript'
console.log(str3.replace('Java', 'Type'))

let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana',]; 

console.log("Array ex :" + fruits)

let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// or 
let values2: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 

console.log(values)

var empId: number = 1;
var empName: string = "Steve";

// Tuple type variable 
var employee: [number, string] = [1, "Steve"];
console.log("Tuple Ex :" + employee)

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

console.log(user)

let something: any = "Hello World!";
something = 23;

console.log(something)

let arr: any[] = ["John", 212, true];
arr.push("Smith");
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 



setInterval(() => {
    console.log();
}, 1000)
