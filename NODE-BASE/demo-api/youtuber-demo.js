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
      message: "유투버 정보를 찾을 수 없습니다.",
    });
  } else {
    res.json(youtuber);
  }
});
