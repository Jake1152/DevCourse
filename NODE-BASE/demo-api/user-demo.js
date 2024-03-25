const express = require("express");
// const { StatusCodes } = require("http-status-codes");
const app = express();
const port = 7777;
app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});

let db = new Map();
let myId = 1;

// db.set(myId++, {"userId" : })

app.use(express.json());

// login
app.post("/login", (req, res) => {
  console.log(req.body);

  const { userId } = req.body;
  console.log(`userId : ${userId}`);
  for (const [user, id] of db) {
    if (user.userId === userId) {
      console.log("같은 거 찾았어");
    }
  }
  res.status(200).json(req.body);
});

// join
app.post("/join", (req, res) => {
  console.log(`req.body : `, req.body);
  console.log(`req.body.size : `, req.body.size);

  let statusCode;
  let msg;

  // req.body는 항상 값이 있기에 req.body === undefined 같은 코드가 동작하지 않는다.
  // if (req.body === undefined) {
  // == {}이면 === {} 일때와 무엇이 다른가? 둘다 false가 나온다. 의도대로 동작하지 않는 코드이다.
  if (req.body == {}) {
    // if (req.body.size > 0) {
    db.set(myId++, req.body);
    statusCode = 201;
    msg = `${db.get(myId - 1).name}님 환영합니다.`;
  } else {
    statusCode = 400;
    msg = `회원정보를 입력해주세요.`;
  }

  res.status(statusCode).json({
    message: msg,
  });
  // if (req.body == {}) {
  //   // res.status(StatusCodes.BAD_REQUEST).json({
  //   res.status(400).json({
  //     message: "입력 값을 다시 확인해주세요.",
  //   });
  // }
});

// 특정유저 찾기
app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  console.log(`db : `, db);
  let msg = "";
  if (db.get(id)) {
    // if (db.get(id)) {
    // const name = db.find;
    msg = `${db.get(id).name} 유저를 찾았습니다.`;
  } else {
    msg = `찾으시는 유저를 못 찾았습니다.`;
  }

  res.status(200).send({ message: msg });
});

// 전체유저 목록 반환
app.get("/users", (req, res) => {
  console.log(`db : `, db);
  let users = {};
  if (db.size >= 1) {
    users = db;
    res.status(200).json(db);
  }
  // if (db.get(id)) {
  //   // if (db.get(id)) {
  //   // const name = db.find;
  //   msg = `${db.get(id).name} 유저를 찾았습니다.`;
  // } else {
  //   msg = `${id} 유저를 못 찾았습니다.`;
  // }

  res.status(200).json(users);
});
