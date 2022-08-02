'use strict';
// Q1. make a string out of an array
{
    const frutis = ['apple', 'banna', 'orange'];
    const result = fruits.join(); // 배열의 모든 값을 더해서 string으로 전환 (구분자를 넣어서 만들어줌)
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(','); // string을 전달된 구분자로 나눠줌, 인자로 개수를 전달할 수도 있음
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); // 배열의 원소의 순서를 거꾸로 바꿔줌
    console.log(result);
    console.log(array); // 배열 자체도 순서가 바뀜
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0,2); //array 자체를 수정함
    const result = array.slice(2, 5); // 배열의 특정 부분을 리턴, start end가 인자로 넘어감 start는 배열의 시작 인덱스, end는 exclusive
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.scroe = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90); // 콜백함수 두개를 인자로 전달받음, 첫번째로 찾아진 요소를 반환
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled); // 콜백함수를 전달, 걸러서 새로운 배열 전달
    console.log(result);
}

// Q7. make an array containing only the students scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score); // 배열안에 들어있는 요소 한가지 한가지를 다른 것으로 변환 (가공,반환)
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50); // 배열의 요소 중에서 콜백함수가 리턴이 true가 있는지 없는지 확인
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50); // 배열의 모든 요소들이 조건을 충족해야 true가 리턴됨
    console.log(result2);

}

// Q9. compute students average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, console.log(result/students.length)); // 콜백함수를 전달, 또는 이니셜value를 전달
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score)
    .sort((a,b) => b - a)
    .join();
    console.log(result);
}