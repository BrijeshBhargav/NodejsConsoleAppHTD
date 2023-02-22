/*--- functions in TS*/

function sayHi(): number {
    console.log('Hi!')
    return 0;
}
function myData(): string {
    return "";
}

function Add(): void {
    var x = 4;
    var y = 6;
    var res = x + y;
    console.log(res);
}
function sub(x:number,y:number): void {
 
    var res = x + y;
    console.log(res);
}

var res = sayHi();
if (res == 0) {
    console.log("method with 0 as return type");
}
else {
    console.log("mehod with return type");
}

Add();
sub(35, 45);


/*--------- Fun with Multiple Return TYpes--------*/

    function getValue(num: number): string | number {
        if (num > 5) {
            return 100;
        }

        return 'hello';
    }

//  const result1: string | number
const result = getValue(4);

if (typeof result === 'string') {
    //  result is a string here
    console.log(result.toUpperCase());
} else {
    //  result is a number here
    console.log(result.toFixed(2));
}




setInterval(() => {
    console.log();
}, 1000)
