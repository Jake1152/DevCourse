// 변수의 데이터 타입 명시
// array with union type
var mixedArray = [1, "two", 3, "four"];
var mixedArray_with_type_alias = [1, "two", 3, "four"];
for (var _i = 0, mixedArray_1 = mixedArray; _i < mixedArray_1.length; _i++) {
    var element = mixedArray_1[_i];
    console.log("element : ".concat(element));
}
console.log();
// for (const element of mixedArray_with_type_alias) {
//   console.log(`element : ${element}`);
// }
console.log();
var infer = [1, 2, 3]; // type inference
for (var _a = 0, infer_1 = infer; _a < infer_1.length; _a++) {
    var element = infer_1[_a];
    console.log("element : ".concat(element));
}
console.log();
var readOnlyArray = [4, 5, 6];
for (var _b = 0, readOnlyArray_1 = readOnlyArray; _b < readOnlyArray_1.length; _b++) {
    var element = readOnlyArray_1[_b];
    console.log("element : ".concat(element));
}
console.log();
