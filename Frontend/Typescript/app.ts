// 변수의 데이터 타입 명시

let age: number = 20;
let gender: string = "male";
let course: string = "Typescript";
let completed: boolean = false;

interface Student {
  stdId: number;
  stdName: string;
  age?: number;
  gender?: "male" | "female";
  course?: string;
  completed?: boolean;
  setName?: (name: string) => void;
  getName?: () => string;
}

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "string",
    // age: 42,
    gender: "male",
    course: "string",
    completed: true,
  };
}

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
  gender: "male" | "female"; // male 또는 female만 들어온다. , 두개의 값이 이외의 값이 들어올 떄 에러가 난다.
  course = "node.js";
  completed = true;
}

// 객체 타입 지정
const user: { name: string; age: number } = {
  name: "john",
  age: 25,
  //   age: "25",
};

console.log("user : ", user);
