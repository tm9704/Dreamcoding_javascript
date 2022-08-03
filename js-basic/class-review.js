'use strict';
// class Counter {
//     constructor() {
//         this.counter = 0;
//     }

//     increase(runIf5Times) {
//         this.counter++;
//         console.log(this.counter);
//         if(this.counter % 5 === 0){
//             runIf5Times(this.counter);
//         }
//     }
// }

// 장점 : printSomething 조절을 클래스 밖에서 조절을 가능
// 문제점 : increase 함수 호출시마다 콜백함수를 전달해줘야함
// const coolCounter = new Counter();
// function printSomething(num){
//     console.log(`yo! ${num}`);
// }
// function alertNum(num){
//     alert(`Wow! ${num}`);
// }

//constructor에서 받아버리자
class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
           this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num){
    console.log(`yo! ${num}`);
}
function alertNum(num){
    alert(`Wow! ${num}`);
}

const coolCounter = new Counter();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

