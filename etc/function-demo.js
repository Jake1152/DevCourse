/**
 * hoisting test
 */
console.log(add1(1, 2));
/** 선언 이전에 호출하면 에러 발생 심지어는 var 포함 */
// console.log(add2(1, 2)); // error
// console.log(add3(1, 2)); // error
// console.log(add4(1, 2)); // error

/**************************************************************************** */

/**
 *
 */
function add1(x, y) {
  return x + y;
}

/**
 *
 */
let add2 = function (x, y) {
  return x + y;
};

/**
 * 화살표 함수, arrow function
 */
const add3 = (x, y) => {
  return x + y;
};

/**
 *
 */
var add4 = (x, y) => x + y;

console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
/**
 *
 */
