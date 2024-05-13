// 변수의 데이터 타입 명시
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
function getInfo(id) {
    return {
        stdId: id,
        stdName: "string",
        // age: 42,
        gender: "male",
        course: "string",
        completed: true
    };
}
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
        this.course = "node.js";
        this.completed = true;
    }
    return MyStudent;
}());
// 객체 타입 지정
var user = {
    name: "john",
    age: 25
};
console.log("user : ", user);
