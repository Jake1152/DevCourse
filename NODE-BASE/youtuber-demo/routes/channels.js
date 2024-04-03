const express = require("express");
const router = express.Router();

router.use(express.json());

const db = new Map();
let myId = 1;

const notFoundChannel = (res) => {
  res.status(404).json({ message: "없는 채널입니다." });
};

router
  .route("/")
  .post((req, res) => {
    console.log("/channel");
    if (req.body?.channelTitle) {
      let channel = req.body;
      db.set(myId, channel);
      myId++;

      return res
        .status(201)
        .json({ message: `${channel.channelTitle} 채널이 생성되었습니다.` });
    }
    return res.status(400).json({ message: "채널 제목을 입력해주세요." });
  })
  .get((req, res) => {
    if (db.size === 0) {
      return notFoundChannel(res);
    }

    let { userId } = req.body;
    const channels = [];

    if (!userId) {
      return res.status(400).json({ message: "로그인이 필요합니다." });
    }

    db.forEach((element, index) => {
      if (element.userId === userId) channels.push(element);
    });

    if (channels.length === 0) {
      return notFoundChannel(res);
    }

    return res.status(200).json(channels);
  });

router.route("/:id").get((req, res) => {
  let { id } = req.params;
  console.log(`myId : ${myId}, id : ${id}`);
  myId += id;

  const channel = db;
  if (db.has(id)) {
    db.delete(id);

    return res.status(200).json({
      message: `${channel.channelTitle} 채널이 삭제되었습니다.`,
    });
  }
  return notFoundChannel(res);
});

module.exports = router;
