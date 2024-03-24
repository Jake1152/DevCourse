const express = require("express");
const app = express();
app.listen(4242);

let youtuber1 = {
  channelTitle: "민음사TV",
  sub: "20.5만",
  video: "595개",
};

let youtuber2 = {
  channelTitle: "별별역사",
  sub: "52.5만",
  video: "146개",
};

let youtuber3 = {
  channelTitle: "셜록현준",
  sub: "121만",
  video: "197개",
};

let db = new Map();
let myId = 1;
db.set(myId++, youtuber1);
db.set(myId++, youtuber2);
db.set(myId++, youtuber3);

// REST API 설계
app.get("/youtubers/:id", function (req, res) {
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
    // const channelTitle = youtuber.channelTitle;
    db.delete(id);
    res.json({ message: "삭제됨." });
  }
});

app.get("/youtubers", function (req, res) {
  // db.forEach((yoububer) => {
  //   console.log(yoububer);
  // });

  // // for-of way 00
  // for (const youtuber of db) {
  //   console.log(`youtuber : `, youtuber);
  // }
  // // for-of way 01 왜 대괄호로 감싸야 하는가?
  // for (const [youtuberKey, youtuberValue] of db) {
  //   console.log(youtuberKey, youtuberValue);
  // }

  let youtubers = {};
  db.forEach((value, key) => {
    youtubers[key] = value;
  });

  // console.log(db.set());
  // console.log(db.values());
  return res.json(youtubers);
});

app.use(express.json());
app.post("/youtubers", (req, res) => {
  console.log(req.body);

  db.set(myId++, req.body);

  res.json({
    message: `${db.get(myId - 1).channelTitle}님, 유투버 생활을 응원합니다.`,
  });
});

app.delete("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);
  if (youtuber) {
    const channelTitle = youtuber.channelTitle;
    db.delete(id);
    return res.json({
      message: `${channelTitle}님의 유투브 계정이 삭제되었습니다.`,
    });
  } else {
    return res.json({
      message: "요청하신 유저는 이미 삭제 되었습니다.",
    });
  }
});

/**
 * 멱등성이 있다
 */
app.delete("/youtubers", (req, res) => {
  // for (const [key, value] of db) {
  //   const name = value.channelTitle;
  //   console.log(`name : ${name}`);
  //   db.delete(key);
  // }
  let msg = "";
  if (db.size) {
    db.clear();
    msg = "모든 유투브 계정이 삭제되었습니다.";
  } else {
    msg = "삭제할 유투버가 없습니다.";
  }
  return res.json({
    message: msg,
  });
});

app.put("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = +id;

  const youtuber = db.get(id);
  const prevChannelTitle = youtuber.channelTitle;

  if (!youtuber) {
    res.status(404).json({ error: "Youtuber not found" });
    return;
  }

  const newChannelTitle = req.body.channelTitle;
  youtuber.channelTitle = newChannelTitle;
  db.set(id, youtuber);

  res.json({
    message: `${prevChannelTitle}님, 채널명이 ${newChannelTitle}으로 변경되었습니다.`,
  });
});
