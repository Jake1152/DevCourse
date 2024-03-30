// express module setting
const express = require("express");
const app = express();
const port = process.env.PORT || 7777;

app.get("/", (req, res) => {
  //   console.log("");
  res.status(200).send("OK");
});
app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
