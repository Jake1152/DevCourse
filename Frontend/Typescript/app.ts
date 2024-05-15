// 변수의 데이터 타입 명시

let age: number = 20;
// let gender: string = "male";
let course: string = "Typescript";
let completed: boolean = false;

enum GenderType {
  Male = "male",
  Female = "female",
  GenderNeutral = "True",
}

// # Object literal
interface Student {
  stdId: number;
  stdName: string;
  gender?: "male" | "female";
  age?: number;
  course?: string;
  completed?: boolean;
  setName?: (name: string) => void;
  getName?: () => string;
}

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "string",
    age: 42,
    gender: "male",
    course: "string",
    completed: true,
  };
}

/**
 * 모든 자바스크립트, 타입스크립트에서는 Object를 할당할 때 new 키워드가 생략 되어있다.
 * 즉, 모든 오브젝트는 메모리 heap 공간에 담긴다.
 */
function setInfo(student: Student): void {
  // student = student;

  console.log(student);
}

let estudiante = {
  stdId: 15,
  stdName: "Jin",
  age: 27,
  gender: "male",
  // course: "node.js",
  // completed: true,
};

// setInfo(estudiante);

const result: Student = getInfo(1);
console.log(result);

/**
 * Literal type
 * 특정값의 요소만을 나타냄
 * 해당 값의 집합의 요소 중에 하나의 요소로 타입을 지정한다.
 */
class MyStudent implements Student {
  stdId = 91011;
  stdName = "Jin";
  age = 31;
  // gender = "male" | "female"; // gender의 타입이 "male" | "female" 아니라서 error 발생
  gender: "male" | "female" = "male"; // male 또는 female만 들어온다. , 두개의 값이 이외의 값이 들어올 떄 에러가 난다.
  course = "node.js";
  completed = true;
}

// 숫자 리터럴
let speed: 50 | 100 | 200;
speed = 100; // 유효
speed = 200; // 유효
// speed = 150; // 에러, 150dms 50, 100, 200에 해당되지 않음

// boolean 리터럴
let isTrue: true;
isTrue = true; // 유효
// isTrue = false; // 에러 false는 허용되지 않음

// 객체 리터럴 타입
let person: { name: "John"; age: 30 };
person = { name: "John", age: 30 }; // 유효
// person = { name: "Alice", age: 25 }; // 에러 값이 일치해야함

// 타입 별칭
type CardinalDirection = "North" | "East" | "South" | "West";
let direction: CardinalDirection;
direction = "North"; // 유효
// direction = "Northeast"; // Error: Northeast는 허용되지 않음

// 객체 타입 지정
const user: { name: string; age: number } = {
  name: "john",
  age: 25,
};

console.log("user : ", user);

/**
 * # Union, type aliac, type guard
 */
// type check
// let anyVal = 100;
// let anyVal: string = 100;
// anyVal = 200;

// type aliac
type stOrNum = number | string;

// Union
let numStr: number | string = 100;
// numStr = "Jin";

function convertToString(val: number | string): string {
  return String(val);
}

function convertToNumber(val: number | string): number {
  return Number(val);
}

let myStr = convertToString(numStr);
console.log(`myStr : ${myStr}`);

let myNum = convertToNumber(numStr);
console.log(`myNum : ${myNum}`);
