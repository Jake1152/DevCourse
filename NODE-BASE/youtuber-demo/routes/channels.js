const express = require("express");
const router = express.Router();
const connection = require("../mariadb");

router.use(express.json());

const db = new Map();
let myId = 1;

const notFoundChannel = (res) => {
  res.status(404).json({ message: "없는 채널입니다." });
};

router
  .route("/")
  .post((req, res) => {
    const { name, userId } = req.body;

    if (!name || !userId) {
      return res
        .status(400)
        .json({ message: "요청 값을 제대로 입력해서 보내주세요." });
    }

    let sql = `INSERT INTO channels (name, user_id) VALUES (?, ?)`;
    const values = [name, userId];
    try {
      connection.query(sql, values, (err, results) => {
        if (results.length) {
          return res.status(201).json(results);
        } else {
          // Error code 고민
          return res.status(400).json({ message: "이미 등록된 채널입니다." });
        }
      });
    } catch (err) {
      return res.status(500).json({ message: "Server Error." });
    }
  })
  .get((req, res) => {
    const { userId } = req.body;

    if (userId) {
      let sql = `SELECT * FROM channels WHERE user_id = ?`;
      try {
        connection.query(sql, userId, (err, results) => {
          if (results.length) {
            return res.status(200).json(results);
          } else {
            return notFoundChannel(res);
          }
        });
      } catch (err) {
        return res.status(500).json({ message: "Server Error" });
      }
    } else {
      return res.status(400).json({ message: "로그인이 필요합니다." });
    }
  });

router
  .route("/:id")
  .get((req, res) => {
    let { id } = req.params;
    myId += id;

    let sql = `SELECT * FROM channels WHERE id = ?`;
    try {
      connection.query(sql, myId, (err, results) => {
        if (results.length) {
          return res.status(200).json(results[0]);
        } else {
          return notFoundChannel(res);
        }
      });
    } catch (err) {
      return res.status(200).json({ message: "Server Error." });
    }
  })
  .put((res, req) => {
    let { id } = req.params;
    myId += id;

    const channel = db.get(id);
    if (db.has(id)) {
      db.set(id, req.body);

      return res.status(200).json({
        message: `${channel.channelTitle} 채널이 ${
          db.get(id).channelTitle
        }로 수정되었습니다.`,
      });
    } else {
      return notFoundChannel(res);
    }
  })
  .delete((req, res) => {
    let { id } = req.params;
    myId += id;

    const channel = db.get(id);
    if (db.has(id)) {
      db.delete(id);

      return res.status(200).json({
        message: `${channel.channelTitle} 채널이 삭제되었습니다.`,
      });
    } else {
      return notFoundChannel(res);
    }
  });

module.exports = router;
