const express = require("express");
const router = express.Router();
const connection = require("../mariadb");

const { body, validationResult, param } = require("express-validator");

router.use(express.json());

const db = new Map();
let myId = 1;

const validate = (req, res) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json(err.array());
  }
};

const notFoundChannel = (res) => {
  res.status(404).json({ message: "없는 채널입니다." });
};

router
  .route("/")
  .get(
    [
      body("userId")
        .notEmpty()
        .isInt()
        .withMessage("userId 값으로 숫자를 입력하시오."),
      validate,
    ],
    (req, res) => {
      const { userId } = req.body;

      const sql = `SELECT * FROM channels WHERE user_id = ?`;
      try {
        connection.query(sql, userId, (err, results) => {
          if (err) {
            console.error(err);
            return res.status(400).end();
          } else if (results.length) {
            return res.status(200).json(results);
          } else {
            return notFoundChannel(res);
          }
        });
      } catch (err) {
        return res.status(500).json({ message: "Server Error" });
      }
    }
  )
  .post(
    [
      body("userId").notEmpty().isInt().withMessage("숫자를 입력해주세요."),
      body("name").notEmpty().isString().withMessage("문자열을 입력해주세요."),
    ],
    (req, res) => {
      const err = validationResult(req);

      if (!err.isEmpty()) {
        return res.status(400).json(err.array());
      }

      const { name, userId } = req.body;

      if (!name || !userId) {
        return res
          .status(400)
          .json({ message: "요청 값을 제대로 입력해서 보내주세요." });
      }

      const sql = `INSERT INTO channels (name, user_id) VALUES (?, ?)`;
      const values = [name, userId];
      try {
        connection.query(sql, values, (err, results) => {
          if (err) {
            console.error(err);
            return res.status(400).end();
          } else if (results.length) {
            return res.status(201).json(results);
          } else {
            // Error code 고민
            return res.status(400).json({ message: "이미 등록된 채널입니다." });
          }
        });
      } catch (err) {
        return res.status(500).json({ message: "Server Error." });
      }
    }
  );

router
  .route("/:id")
  .get(
    param("id").notEmpty().withMessage("채널 id가 필요합니다."),
    (req, res) => {
      const err = validationResult(req);

      if (!err.isEmpty()) {
        return res.status(400).json(err.array());
      }

      let { id } = req.params;
      myId += Number(id);

      const sql = `SELECT * FROM channels WHERE id = ?`;
      try {
        connection.query(sql, myId, (err, results) => {
          if (err) {
            console.error(err);
            return res.status(400).end();
          } else if (results.length) {
            return res.status(200).json(results[0]);
          } else {
            return notFoundChannel(res);
          }
        });
      } catch (err) {
        return res.status(500).json({ message: "Server Error." });
      }
    }
  )
  .put(
    [
      param("id").notEmpty().withMessage("채널 id가 필요합니다"),
      body("name").notEmpty().isString().withMessage("채널명을 입력해주세요"),
    ],
    (res, req) => {
      const err = validationResult(req);

      if (!err.isEmpty()) {
        return res.status(400).json(err.array());
      }

      const { id } = req.params;
      myId += Number(id);

      const { name } = req.body;

      const sql = `UPDATE channels SET name = ? WHERE id = ?`;
      const values = [name, id];

      try {
        connection.query(sql, values, (err, results) => {
          if (err) {
            console.error(err);
            return res.status(400).end();
          } else if (results.affectedRows === 0) {
            return res.status(400).end();
          } else {
            return res.status(200).json(results);
          }
        });
      } catch (err) {
        return res.status(500).json({ message: "Server Error." });
      }
    }
  )
  .delete(
    param("id").notEmpty().withMessage("채널 id가 필요합니다"),
    (req, res) => {
      const err = validationResult(req);

      if (!err.isEmpty()) {
        return res.status(400).json(err.array());
      }

      const { id } = req.params;
      myId += Number(id);

      const sql = `DELETE FROM channels WHERE id = ?`;
      try {
        connection.query(sql, values, (err, results) => {
          if (err) {
            console.error(err);
            return res.status(400).end();
          } else if (results.affectedRows === 0) {
            return res.status(400).end();
          } else {
            return res.status(200).json(results);
          }
        });
      } catch (err) {
        return res.status(500).json({ message: "Server Error." });
      }
    }
  );

module.exports = router;
