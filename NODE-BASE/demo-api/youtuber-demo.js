const express = require("express");
const app = express();
app.listen(4242);

let youtuber1 = {
  channelTittle: "민음사TV",
  sub: "20.5만",
  video: "595개",
};

let youtuber2 = {
  channelTittle: "별별역사",
  sub: "52.5만",
  video: "146개",
};

let youtuber3 = {
  channelTittle: "셜록현준",
  sub: "121만",
  video: "197개",
};

let db = new Map();
db.set(1, youtuber1);
db.set(2, youtuber2);
db.set(3, youtuber3);

// REST API 설계
app.get("/youtuber/:id", function (req, res) {
  console.log("Get method of /youtuber/:id router");
  let { id } = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);
  if (youtuber === undefined) {
    res.json({
      // message: "유투버 정보를 찾을 수 없습니다.",
      message: `요청하신 ${id}번은 없는 유투버입니다.`,
    });
  } else {
    const channelTitle = youtuber.channelTitle;
    db.delete(id);
    res.json(youtuber);
  }
});

app.get("/youtubers", function (req, res) {
  db.forEach((yoububer) => {
    console.log(yoububer);
  });

  // for-of way 00
  for (const youtuber of db) {
    console.log(`youtuber : `, youtuber);
  }
  // for-of way 01 왜 대괄호로 감싸야 하는가?
  for (const [youtuberKey, youtuberValue] of db) {
    console.log(youtuberKey, youtuberValue);
  }

  let youtubers = {};
  db.forEach((value, key) => {
    youtubers[key] = value;
  });

  // console.log(db.set());
  // console.log(db.values());
  return res.json(youtubers);
});

// some
// {
// }
