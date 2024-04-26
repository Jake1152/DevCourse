/**
 * map 함수 vs foreach 차이
 */
const arr = [1, 2, 3, 4, 5];

arr.forEach((a, b, c) => {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
});

const foreachArr = arr.forEach((a, b, c) => {
  // 인자 순서는 오른쪽과 같음 value,  index, all objects
  return a * 2;
});

const mapArr = arr.map(function (a, b, c) {
  // 인자 순서는 오른쪽과 같음 value, key, map objects
  return a * 2;
});

/**
 * foreachArr()로 호출하는 것이 아닌 foreachArr로 호출하여 되는 이유는 무엇인가?
 * 인자를 받는게 없어서 가능한 것인가?
 * 함수가 아니라고 뜬다
 * /mnt/d/project/web/DevCourse/Etc/demo-js/map-demo.js:29
  console.log(`mapArr(): ${mapArr()}`);
                          ^
  TypeError: mapArr is not a function
 * 함수를 담은 것이 아닌 함수의 결과를 담았기에 이러한 차이가 발생하는 것 아닌가 싶다
 * 
 */
// # without bracket
/**
 * foreach의 경우 return 한 값이 변수에 담기지는 않는다.
 */
console.log(`foreachArr's return : ${foreachArr}`);
console.log(`mapArr's return : ${mapArr}`);

// # with bracket does not work.
// console.log(`mapArr(): ${mapArr()}`);
// console.log(`foreachArr(): ${foreachArr()}`);

// # with bracket Wokring version
const mapArrWithArg = (arr) => {
  return arr.map((a, b, c) => {
    return a * 2;
  });
};

console.log(`mapArrWithArg(arr) : ${mapArrWithArg(arr)}`);
// let map = new Map();
// map.set(7, "seven");
// map.set(9, "nine");
// map.set(8, "eight");

// map.forEach(function (value) {
//   console.log(`value : ${value}`);
// });

// map.forEach(function (value, key) {
//   console.log(`value : ${value}, key: ${key}`);
// });

// // Map인 경우에 마지막 인자는 map 객체가 통째로 들어간다.
// // value, key, map object
// map.forEach(function (value, key, mapObjects) {
//   console.log(`value : ${value}, key: ${key}, mapObjects: ${mapObjects}`);
// });
