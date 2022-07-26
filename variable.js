//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'minhyung';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting
// has no block scope
age = 4;
var age;

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

//Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
// 즉 JS에는 mutable type의 let immutable type의 const가 있음

// 4. Variable types, rw(read/write)
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function 

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890123467890n;
// over(-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${hellobob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
//string이 똑같다면 동일한 Symbol을 만들고 싶다 할 때는 아래처럼
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
//Symbol은 바로 출력하게 되면 에러가 발생, dot description을 이용해 string으로 변환해서 사용해야 한다.
console.log(`value: ${symbol.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
//ellie.name, ellie.age는 다른 값으로 변경이 가능함

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // string
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // number
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 위험한 이유 (runtime error가 많이 발생함)
