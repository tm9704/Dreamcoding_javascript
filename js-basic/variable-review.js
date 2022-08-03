'use strict';

// primitive data type
// number, string, boolean, null, undefined
let age = 2;
let number = '2';
let number2 = number; // number에 할당된 값이 '복사'되어 적재
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object
let obj = {
    name: 'ellie',
    age: 5,
};
console.log(obj.name);

//주소가 reference
//reference가 복사되어서 전달됨.
let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('-------');
console.log(obj.name);
console.log(obj2.name);



