// const { StatusCodes } = require("http-status-codes");
const express = require("express");

const router = express.Router();
router.use(express.json());

let db = new Map();

const isExist = (obj) => {
  return Object.keys(obj).length === 0;
};

// db.set(myId++, {"userId" : })

//회원 조회, 탈퇴
router
  .route("/users")
  .get((req, res) => {
    const { userId } = req.body;

    const user = db.get(userId);
    if (db.has(userId)) {
      return res.status(200).json({
        userId: user.userId,
        name: user.name,
      });
    }
    return res.status(404).json({ message: "없는 회원입니다." });
  })
  .delete((req, res) => {
    let { userId } = req.body;

    const user = db.get(userId);
    if (db.has(userId)) {
      db.delete(userId);
      return res
        .status(200)
        .json({ message: `${user.name}님 탈퇴되었습니다.` });
    }
    return res.status(404).json({ message: "없는 회원입니다." });
  });

// login
router.post("/login", (req, res) => {
  console.log(`req.body : `, req.body);

  const { userId, password } = req.body;
  let loginUser = {};

  db.forEach((user, idx) => {
    if (user.userId === userId) {
      loginUser = { ...user };
      console.log(`loginUser : `, loginUser);
    }
  });

  if (isExist(loginUser)) {
    if (loginUser.password === password) {
      return res
        .status(200)
        .json({ message: `${loginUser.name}님 환영합니다.` });
    }
    return res.status(400).json({ message: "비밀번호가 틀렸습니다." });
  } else {
    return res.status(404).json({ message: "없는 아이디입니다." });
  }
});

// join
router.post("/join", (req, res) => {
  console.log(`req.body : `, req.body);

  if (req.body.name && req.body.userId && req.body.password) {
    const { userId } = req.body;
    db.set(userId, req.body);

    return res
      .status(201)
      .json({ message: `${db.get(userId).name}님 환영합니다.` });
  }
  return res.status(400).json({ message: "정보를 제대로 입력해주세요." });
});

module.exports = router;
