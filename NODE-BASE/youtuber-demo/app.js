const express = require("express");
const userRouter = require("./routes/users");
const channelRouter = require("./routes/channels");

const app = express();
const port = process.env.PORT || 7777;

// app.get("/", (req, res) => {
//   return res.send("OK");
// });

app.use("/", userRouter);
app.use("/channels", channelRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
