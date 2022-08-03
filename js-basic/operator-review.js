'use strict';

//false: 0, -0, '', null, undefined
//true: -1 (0 제외 숫자), 'hello', 빈 배열
let num = 9;
if(num) {
    console.log('true!');
}else {
    console.log('false!');
}

//num이 true이면 console.log 출력
num && console.log(num);