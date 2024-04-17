const express = require("express");
const dotenv = require("dotenv");

const app = express();

const users = require("./routes/users");
const books = require("./routes/books");

dotenv.config();
const port = process.env.PORT || 4242;

app.use(express.json());

app.use("/user", users);
app.use("/book", books);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
//임진호
