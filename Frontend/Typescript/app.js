// 변수의 데이터 타입 명시
var age = 20;
// let gender: string = "male";
var course = "Typescript";
var completed = false;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "True";
})(GenderType || (GenderType = {}));
function getInfo(id) {
    return {
        stdId: id,
        stdName: "string",
        age: 42,
        gender: "male",
        course: "string",
        completed: true
    };
}
/**
 * 모든 자바스크립트, 타입스크립트에서는 Object를 할당할 때 new 키워드가 생략 되어있다.
 * 즉, 모든 오브젝트는 메모리 heap 공간에 담긴다.
 */
function setInfo(student) {
    // student = student;
    console.log(student);
}
var estudiante = {
    stdId: 15,
    stdName: "Jin",
    age: 27,
    gender: "male"
};
// setInfo(estudiante);
var result = getInfo(1);
console.log(result);
/**
 * Literal type
 * 특정값의 요소만을 나타냄
 * 해당 값의 집합의 요소 중에 하나의 요소로 타입을 지정한다.
 */
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = "Jin";
        this.age = 31;
        // gender = "male" | "female"; // gender의 타입이 "male" | "female" 아니라서 error 발생
        this.gender = "male"; // male 또는 female만 들어온다. , 두개의 값이 이외의 값이 들어올 떄 에러가 난다.
        this.course = "node.js";
        this.completed = true;
    }
    return MyStudent;
}());
// 숫자 리터럴
var speed;
speed = 100; // 유효
speed = 200; // 유효
// speed = 150; // 에러, 150dms 50, 100, 200에 해당되지 않음
// boolean 리터럴
var isTrue;
isTrue = true; // 유효
// isTrue = false; // 에러 false는 허용되지 않음
// 객체 리터럴 타입
var person;
person = { name: "John", age: 30 }; // 유효
var direction;
direction = "North"; // 유효
// direction = "Northeast"; // Error: Northeast는 허용되지 않음
// 객체 타입 지정
var user = {
    name: "john",
    age: 25
};
console.log("user : ", user);
