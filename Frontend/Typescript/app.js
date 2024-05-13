// 변수의 데이터 타입 명시
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
function getInfo(id) {
    return {
        stdId: id,
        stdName: "string",
        age: 42,
        gender: "string",
        course: "string",
        completed: true
    };
}
var result = getInfo(1);
console.log(result);
