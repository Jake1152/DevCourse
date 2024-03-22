const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home sweet home");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port} port.`);
});
