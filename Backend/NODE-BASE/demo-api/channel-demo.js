// const express = require("express");
const router = require("./user-demo").router;
const statusCode = require("http-status-codes");
const app = express();

const port = process.env.PORT || 7777;

// for JSON type request message body parsing
app.use(express.json());

let db = new Map();
let myId = 1;
// db.set();

app
  .route("/channels")
  // 채널 전체 조회
  .get((req, res) => {
    // res.status(statusCode.OK).send("전체 조회");
    if (db.size) {
      let channels = [];
      for (const [key, value] of db.entries()) {
        channels.push(value);
      }
      return res.status(statusCode.OK).json(channels);
    } else {
      return res
        .status(statusCode.NOT_FOUND)
        .json({ message: "조회할 채널이 없습니다." });
    }
  })
  // 채널 개별 생성
  .post((req, res) => {
    if (req?.body?.channelTitle) {
      const curId = myId;
      db.set(myId++, req.body);
      return res
        .status(statusCode.CREATED)
        .json({ message: `${db.get(curId).channelTitle} 채널을 응원해요.` });
    } else {
      return res
        .status(statusCode.BAD_REQUEST)
        .json({ message: "요청 값을 제대로 보내주세요." });
    }
  });

app
  .route("/channels/:id")
  // 채널 개별 조회
  .get((req, res) => {
    // res.status(statusCode.OK).send("전체 조회");
    let { id } = req.params;
    id = parseInt(id);

    let channel = db.get(id);
    if (channel) {
      return res.status(statusCode.OK).json(db.get(id));
    } else {
      return res.status(statusCode.NOT_FOUND).json({
        message: "채널 정보를 찾을 수 없습니다.",
      });
    }
  })
  // 채널 개별 수정
  .put((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    let channel = db.get(id);

    if (channel) {
      let newTitle = req?.body?.channelTitle;
      let oldTitle = channel?.channelTitle;

      channel.channelTitle = newTitle;
      db.set(id, channel);

      return res.status(statusCode.OK).json({
        message: `기존 ${oldTitle} 에서 ${newTitle}로 채널명이 정상적으로 수정되었습니다.`,
      });
    } else {
      return res
        .status(statusCode.NOT_FOUND)
        .json({ message: "채널 정보를 찾을 수 없습니다." });
    }
  })
  // 개별채널 삭제
  .delete((req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    let channel = db.get(id);
    if (channel) {
      db.delete(id);
      return res.status(statusCode.OK).json({
        message: `${channel.channelTitle}이 정상적으로 삭제 되었습니다.`,
      });
    } else {
      return res
        .status(statusCode.NOT_FOUND)
        .json({ message: "채널 정보를 찾을 수 없습니다." });
    }
  });

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
