const express = require("express");

const app = express();
const port = 1234;

app.get("/", (req, res) => res.send("Hello World"));

app.use(express.json()); // for parsing application/json
app.post("/test", (req, res) => {
  console.log(req.body);
  res.send("Hello POST");
});

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
let mId = 1;
db.set(mId++, youtuber1);
db.set(mId++, youtuber2);
db.set(mId++, youtuber3);

app.get("/youtubers", (req, res) => {
  const youtubers = {};
  db.forEach((el, idx) => {
    youtubers[idx] = el;
  });
  res.json(youtubers);
});

app.get("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = +id;

  const youtuber = db.get(id);
  if (!youtuber) {
    res.status(404).json({ error: "Youtuber not found" });
    return;
  }
  res.json(youtuber);
});

// json parser
app.use(express.json());
app.post("/youtubers", (req, res) => {
  db.set(mId++, req.body);
  console.log(db);
  console.log(mId);

  res.json({ message: `${db.get(mId - 1)}님, 유튜버 활동을 응원해요` });
});

app.delete("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = +id;

  const youtuber = db.get(id);
  if (!youtuber) {
    res.status(404).json({ error: "Youtuber not found" });
    return;
  }
  db.delete(id);
  res.json({ message: `삭제됨` });
});

app.delete("/youtubers", (req, res) => {
  if (db.size === 0) {
    res.status(404).json({ message: "DB is empty" });
    return;
  }
  db.clear();
  res.json({ message: `모두 삭제됨` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
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
