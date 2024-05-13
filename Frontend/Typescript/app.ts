// 변수의 데이터 타입 명시

let age: number = 20;
let gender: string = "male";
let course: string = "Typescript";
let completed: boolean = false;

interface Student {
  stdId: number;
  stdName: string;
  age?: number;
  gender: string;
  course: string;
  completed: boolean;
}

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "string",
    // age: 42,
    gender: "string",
    course: "string",
    completed: true,
  };
}

const result: Student = getInfo(1);
console.log(result);
