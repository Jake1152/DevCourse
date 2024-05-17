// 변수의 데이터 타입 명시

// let age: number = 20;
// // let gender: string = "male";
// let course: string = "Typescript";
// let completed: boolean = false;

// enum GenderType {
//   Male = "male",
//   Female = "female",
//   GenderNeutral = "True",
// }

// // # Object literal
// interface Student {
//   stdId: number;
//   stdName: string;
//   gender?: "male" | "female";
//   age?: number;
//   course?: string;
//   completed?: boolean;
//   setName?: (name: string) => void;
//   getName?: () => string;
// }

// function getInfo(id: number): Student {
//   return {
//     stdId: id,
//     stdName: "string",
//     age: 42,
//     gender: "male",
//     course: "string",
//     completed: true,
//   };
// }

// /**
//  * 모든 자바스크립트, 타입스크립트에서는 Object를 할당할 때 new 키워드가 생략 되어있다.
//  * 즉, 모든 오브젝트는 메모리 heap 공간에 담긴다.
//  */
// function setInfo(student: Student): void {
//   // student = student;

//   console.log(student);
// }

// let estudiante = {
//   stdId: 15,
//   stdName: "Jin",
//   age: 27,
//   gender: "male",
//   // course: "node.js",
//   // completed: true,
// };

// // setInfo(estudiante);

// const result: Student = getInfo(1);
// console.log(result);

/**
 * # Literal type
 * 특정값의 요소만을 나타냄
 * 해당 값의 집합의 요소 중에 하나의 요소로 타입을 지정한다.
 */
// class MyStudent implements Student {
//   stdId = 91011;
//   stdName = "Jin";
//   age = 31;
//   // gender = "male" | "female"; // gender의 타입이 "male" | "female" 아니라서 error 발생
//   gender: "male" | "female" = "male"; // male 또는 female만 들어온다. , 두개의 값이 이외의 값이 들어올 떄 에러가 난다.
//   course = "node.js";
//   completed = true;
// }

// // 숫자 리터럴
// let speed: 50 | 100 | 200;
// speed = 100; // 유효
// speed = 200; // 유효
// // speed = 150; // 에러, 150dms 50, 100, 200에 해당되지 않음

// // boolean 리터럴
// let isTrue: true;
// isTrue = true; // 유효
// // isTrue = false; // 에러 false는 허용되지 않음

// // 객체 리터럴 타입
// let person: { name: "John"; age: 30 };
// person = { name: "John", age: 30 }; // 유효
// // person = { name: "Alice", age: 25 }; // 에러 값이 일치해야함

// // 타입 별칭
// type CardinalDirection = "North" | "East" | "South" | "West";
// let direction: CardinalDirection;
// direction = "North"; // 유효
// // direction = "Northeast"; // Error: Northeast는 허용되지 않음

// // 객체 타입 지정
// const user: { name: string; age: number } = {
//   name: "john",
//   age: 25,
// };

// console.log("user : ", user);

/**
 * # Union, type aliac, type guard
 */
// type check
// let anyVal = 100;
// let anyVal: string = 100;
// anyVal = 200;

// // type alias
// type stOrNum = number | string;

// // Union
// let numStr: stOrNum = 100;
// let item: number;

// function convertToString(val: stOrNum): string {
//   // 큰 범위에서 작은 범위에 대입할 때는 문제가 된다.
//   // item은  number만 받는데 numStr은 number, string 둘 다 가지고 있기 때문이다.
//   if (typeof val === "string") item = 0;
//   else item = val;
//   return String(val);
// }

// function convertToNumber(val: stOrNum): number {
//   return Number(val);
// }

// let myStr = convertToString(numStr);
// console.log(`myStr : ${myStr},\t typeof myStr : ${typeof myStr}`);

// let myNum = convertToNumber(numStr);
// console.log(`myNum : ${myNum},\t typeof myNum : ${typeof myNum}`);

/**
 * # Array, Tuple
 */
// # Array
// 둘이 같다
// let numbers_with_new_keyword = new Array([1, 2, 3, 4, 5]);
// let numbers_without_type_explicitation = [1, 2, 3, 4, 5];

// let numbers: number[] = [1, 2, 3, 4, 5];

// let fruites: string[] = ["apple", "tomato", "peach"];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < fruites.length; i++) {
//   console.log(fruites[i]);
// }

// # Array union type

// type numOrStr = number | string;
// // array with union type
// let mixedArray: (number | string)[] = [1, "two", 3, "four"];
// let mixedArray_with_type_alias: numOrStr[] = [1, "two", 3, "four"];

// for (const element of mixedArray) {
//   console.log(`mixedArray's element : ${element}`);
// }
// console.log();

// // for (const element of mixedArray_with_type_alias) {
// //   console.log(`mixedArray_with_type_alias's element : ${element}`);
// // }
// console.log();

// let infer = [1, 2, 3]; // type inference
// for (const element of infer) {
//   console.log(`type inferencing array's element : ${element}`);
// }
// console.log();

// let readOnlyArray: ReadonlyArray<number> = [4, 5, 6];
// for (const element of readOnlyArray) {
//   console.log(`readonly array's element : ${element}`);
// }
// console.log();

// // # tuple : 타입의 순서가 정해져 있다.
// let greeting: [number, string, boolean] = [1, "hello", true];
// for (const element of greeting) {
//   console.log(`tuple element : ${element}`);
// }
// console.log();

// # Spread 연산자
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

// firstAray + secondArray; // error

const mergedArray = [firstArray, secondArray];
for (const element of mergedArray) {
  console.log(`tuple element : ${element}`);
}
console.log();

// Spread 연산자 적용
const mergedArrayUsingSpread = [...firstArray, ...secondArray];
for (const element of mergedArrayUsingSpread) {
  console.log(`tuple element : ${element}`);
}
console.log();
