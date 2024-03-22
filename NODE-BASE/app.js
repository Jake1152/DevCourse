const express = require("express");
const app = express();
const port = 1234;

app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});

/**
 * Express에서 미들웨어 쓸 때 사용함
 * POST 메서드로 들어온 request의 body를 사용하기 위해서 express.json() 필요!!
 * 왜 필요한가?
 */
app.use(express.json());

/**
 * generator에 있는 내용 직접 구현하게 됨
 */
app.post("/test", function (req, res) {
  // req.body = JSON.stringify(req.body);
  console.log(`req.body: `, req.body);
  // console.log(`req: `, req);
  // res.send("Hello POST!!!");
  return res.send(req.body);
  // 실행흐름이 위에서 끝나는가? \
  // 그렇지 않았다.
  // console.log(`req.body.message: `, req.body.message);
  // res.send(req.body.message);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
