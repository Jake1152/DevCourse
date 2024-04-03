const express = require("express");
// const { StatusCodes } = require("http-status-codes");
const router = express().Router();

let db = new Map();
let myId = 1;

// db.set(myId++, {"userId" : })

router.use(express.json()).Router();

// login
router.post("/login", (req, res) => .Router(){
  console.log(req.body);

  const { userId, password } = req.body;
  // console.log(`userId : ${userId}`);
  // for (const [user, id] of db) {
  //   if (user.userId === userId) {
  //     console.log("같은 거 찾았어");
  //   }
  // }
  let loginUser = {};

  // db.forEach((user, id) => {
  //   if (user.userId === userId) {
  //     loginUser = user;
  //   }
  // });
  // for (const [key, user, objects] of db) { // objects 같은 것은 없다
  // for (const [key, user] of db) {
  // for (const [key, user] of db.entries()) {

  // for (const key of db.keys()) {
  //   // console.log("user : ", user);
  //   console.log("key : ", key);
  //   // console.log("objects : ", objects);
  //   // if (user.userId === userId) {
  //   console.log("db.get(key) : ", db.get(key));
  //   console.log("db.get(key).userId : ", db.get(key).userId);
  //   if (db.get(key).userId === userId) {
  //     // if (user.userId === userId) {
  //     loginUser = db.get(key);
  //   }
  // }

  // keys()나 entries()가 아니라면 index 1이 값이 들어있는 부분
  // 그런데 왜 인덱스 1이어야 하는가?, object에 어떤 부분이 연관되는가?
  for (const obj of db) {
    // console.log("user : ", user);
    const user = obj[1];
    console.log("user : ", user);
    // console.log("objects : ", objects);
    if (user.userId === userId) {
      // console.log("db.get(user) : ", db.get(key));
      // console.log("db.get(key).userId : ", db.get(key).userId);
      // if (db.get(key).userId === userId) {
      // if (user.userId === userId) {
      loginUser = user;
    }
  }

  if (Object.keys(loginUser).length > 0) {
    console.log("같은 유저를 찾았다.");
    // pwd 일치여부 확인
    if (loginUser.password === password) {
      console.log("패스워드 일치");
    } else {
      console.log("아이디 또는 패스워드 정보가 일치하지 않습니다.");
    }
    return res.status(200).json(req.body);
  } else {
    console.log("입력하신 아이디는 없는 아이디 입니다.");
    return res.status(400).json("Bad request");
  }
});

// join
app.post("/join", (req, res) => {
  console.log(`req.body : `, req.body);

  let statusCode;
  let msg;

  // req.body는 항상 값이 있기에 req.body === undefined 같은 코드가 동작하지 않는다.
  // if (req.body === undefined) {
  // == {}이면 === {} 일때와 무엇이 다른가? 둘다 false가 나온다. 의도대로 동작하지 않는 코드이다.
  // if (req.body == {}) {
  // if (!req.body) {
  if (Object.keys(req.body).length === 0) {
    statusCode = 400;
    msg = `회원정보를 입력해주세요.`;
    // if (req.body.size > 0) {
  } else {
    db.set(myId++, req.body);
    statusCode = 201;
    msg = `${db.get(myId - 1).name}님 환영합니다.`;
  }

  return res.status(statusCode).json({
    message: msg,
  });
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

  return res.status(200).send({ message: msg });
});

app.delete("/users/:id", (req, res) => {
  let msg = "";

  let { id } = req.params;
  id = parseInt(id);

  if (db.get(id)) {
    msg = `${db.get(id).name} 님 탈퇴 되셨습니다.`;
    db.delete(id);
  } else {
    msg = `회원가입 되지 않은 정보입니다.`;
  }
  return res.status(200).json({ message: msg });
});

// 전체유저 목록 반환
// app.get("/users", (req, res) => {
//   console.log(`db : `, db);
//   let users = {};
//   if (db.size >= 1) {
//     users = db;
//     return res.status(200).json(db);
//   }
//   // if (db.get(id)) {
//   //   // if (db.get(id)) {
//   //   // const name = db.find;
//   //   msg = `${db.get(id).name} 유저를 찾았습니다.`;
//   // } else {
//   //   msg = `${id} 유저를 못 찾았습니다.`;
//   // }

//   return res.status(200).json(users);
// });

module.exports = router;
