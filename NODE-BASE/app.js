const express = require("express");
const app = express();
const port = 1234;

app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});

app.post("/test", function (req, res) {
  res.send("Hello POST!!!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
