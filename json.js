'use strict';
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banna']);
console.log(json);

const rabbit = {
    name: 'tory',
    color: 'white',
    size: null,
    brithDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    } //함수는 json에 포함되지 않음 , object에 있는 data가 아니기 때문
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color','size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json); //string
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
consol.log(obj);
rabbit.jump();
//obj.jump(); //함수 포함 x

console.log(rabbit.brithDate.getDate());
console.log(obj.birthDate.getDate());
