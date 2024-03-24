const express = require("express");
const app = express();

app.listen(1234);

app.get("/", (req, res) => {});

// middleware
app.use(express.json());

const arr = [1, 2, 3, 4];

const fruites = [
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
app.get("/fruites", (req, res) => {
  // [,] 같은 정의 앞에 변수선언 키워드를 넣고 않넣고는 등 둘 사이의 차이점은 무엇인가?
  // for ([value, key] of fruites) {
  //   let fruitesJSON = {};
  //   //   for (const fruit of fruites) {
  //   for (const fruitObject of fruites) {
  //     console.log(
  //       `fruit.id : ${fruitObject.id}, fruit.name : ${fruitObject.name}`
  //     );
  //     fruitesJSON[fruitObject.id] = fruitObject.name;
  //     // fruitesObject[key] = value;
  //   }

  //   fruites.forEach((fruit) => {
  //     console.log(`fruit: ${fruit}`);
  //   });
  //   console.log(`fruitesObject : ${fruitesObject}`);

  //   res.json(fruitesObject);
  //   res.send("fruitesObject");
  //   res.json(fruitesJSON);
  return res.json(fruites);
});

// 과일 개별 조회
app.get("/fruites/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  let fruitName = "";
  for (const fruitObject of fruites) {
    // console.log(`fruitObject : `, fruitObject);
    // console.log(`fruitObject[id] : `, fruitObject[id]);
    // console.log(`fruitObject.id : `, fruitObject.id);
    if (fruitObject.id === id) {
      fruitName = fruitObject.name;
      return res.json({
        message: `${fruitName}(을)를 찾았습니다.`,
      });
    }
  }
  return res.json({
    message: `찾으시는 과일은 없습니다.`,
  });
});
