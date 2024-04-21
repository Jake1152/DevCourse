const express = require("express");
const dotenv = require("dotenv");

const app = express();

const users = require("./routes/users");
const books = require("./routes/books");
const category = require("./routes/category");
const like = require("./routes/likes");
const carts = require("./routes/carts");
const order = require("./routes/order");

dotenv.config();
const port = process.env.PORT || 4242;

app.use(express.json());

app.use("/user", users);
app.use("/book", books);
app.use("/category", category);
app.use("/likes", like);
app.use("/carts", carts);
app.use("/order", order);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
//임진호
