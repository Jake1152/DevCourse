const express = require("express");
const app = express();

app.listen(1234);

app.get("/", (req, res) => {});

// middleware
app.use(express.json());

const arr = [1, 2, 3, 4];

const fruits = [
  { id: 1, name: "tomato" },
  { id: 2, name: "apple" },
  { id: 3, name: "watermelon" },
  { id: 4, name: "peach" },
  { id: 5, name: "tangerine" },
  { id: 6, name: "strawberry" },
  { id: 7, name: "persimmon" },
  { id: 8, name: "banana" },
  { id: 9, name: "mango" },
];

// 과일 전체 조회
app.get("/fruits", (req, res) => {
  // [,] 같은 정의 앞에 변수선언 키워드를 넣고 않넣고는 등 둘 사이의 차이점은 무엇인가?
  // for ([value, key] of fruits) {
  //   let fruitsJSON = {};
  //   //   for (const fruit of fruits) {
  //   for (const fruitObject of fruits) {
  //     console.log(
  //       `fruit.id : ${fruitObject.id}, fruit.name : ${fruitObject.name}`
  //     );
  //     fruitsJSON[fruitObject.id] = fruitObject.name;
  //     // fruitsObject[key] = value;
  //   }

  //   fruits.forEach((fruit) => {
  //     console.log(`fruit: ${fruit}`);
  //   });
  //   console.log(`fruitsObject : ${fruitsObject}`);

  //   res.json(fruitsObject);
  //   res.send("fruitsObject");
  //   res.json(fruitsJSON);
  return res.json(fruits);
});

// 과일 개별 조회
app.get("/fruits/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  //   let fruitName = "";
  //   # way 00, 하지만  JSON array의 index이므로 object "id"와 다르다
  //   let fruit = fruits[id];
  //   res.json(fruit);

  // # way01 for문에서 찾기
  //   for (const fruitObject of fruits) {
  //     // console.log(`fruitObject : `, fruitObject);
  //     // console.log(`fruitObject[id] : `, fruitObject[id]);
  //     // console.log(`fruitObject.id : `, fruitObject.id);
  //     if (fruitObject.id === id) {
  //       fruitName = fruitObject.name;
  //       return res.json({
  //         message: `${fruitName}(을)를 찾았습니다.`,
  //       });
  //     }
  //   }
  //   return res.json({
  //     message: `찾으시는 과일은 없습니다.`,
  //   });

  // # way02 find()를 이용해서 한번에 찾기
  /**
   * Array 인스턴스의 find() 메서드는 제공된 배열에서 조건에 만족하는 첫 번째 요소를 반환한다.
   * 만족하는 값이 없으면 undefined가 반환된다.
   * fruitObject.id === id 라면 조건이 만족하므로 fruitObject 가 반환된다.
   */
  const findFruit = fruits.find((fruitObject) => {
    return fruitObject.id === id;
  });
  // # way03 exception 처리
  if (findFruit) res.status(200).json(findFruit);
  else res.status(404).send("찾으시는 id로 저장된 과일이 없습니다.");
  //   else res.status(404).json({ message: "찾으시는 과일이 없습니다." });
});
