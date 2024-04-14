const express = require("express");
const dotenv = require("dotenv");

const app = express();

const mainController = require("./controllers/main.controllers.js");
// const userController = require("./controllers/users.controllers");

dotenv.config();
const port = process.env.PORT || 4242;

app.use(express.json());

app.use("/", mainController);

// app.get("/", (req, res) => {
//   return res.status(200).json({ message: "OK" });
// });

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
//임진호
