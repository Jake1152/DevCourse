// express 모듈
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// dotenv 모듈
const dotenv = require("dotenv");
dotenv.config();

app.listen(port, () => {
  console.log(`Server is started on ${port}`);
});

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const categoryRouter = require("./routes/category");
const likeRouter = require("./routes/likes");
const cartRouter = require("./routes/carts");
const orderRouter = require("./routes/orders");

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/category", categoryRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);