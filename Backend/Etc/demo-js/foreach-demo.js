/**
 * Array
 */
const arr = [1, 2, 3, 4, 5];

/**
 * 콜백함수
 *
 * 어떤 시점에 동작을 하게끔 해주는 함수
 *
 * 전화가 왔을때 찾는 사람이 없었고
 * 찾는 사람이 나중에 왔다면 그 사람이 다시 전화 걸었던 사람에게 연락하는 것이 콜백
 */
arr.forEach((element) => {
  console.log(`element : ${element}`);
});

// value, index
arr.forEach((value, index) => {
  console.log(`value : ${value}, index : ${index}`);
});

// value, index, all elements
arr.forEach((value, index, all) => {
  console.log(`value : ${value}, index : ${index}, all : ${all}`);
});

// 4번째 인자는 없다.
arr.forEach((value, index, all, other) => {
  console.log(
    `value : ${value}, index : ${index}, all : ${all}, other: ${other}`
  );
});

// arr.forEach((element) = {
//     console.log(`element : ${element}`)
// });

let map = new Map();
map.set(7, "seven");
map.set(9, "nine");
map.set(8, "eight");

map.forEach(function (value) {
  console.log(`value : ${value}`);
});

map.forEach(function (value, key) {
  console.log(`value : ${value}, key: ${key}`);
});

// Map인 경우에 마지막 인자는 map 객체가 통째로 들어간다.
// value, key, map object
map.forEach(function (value, key, mapObjects) {
  console.log(`value : ${value}, key: ${key}, mapObjects: ${mapObjects}`);
});