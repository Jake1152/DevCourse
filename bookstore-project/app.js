const express = require("express");
const dotenv = require("dotenv");

const app = express();

const mainController = require("./controllers/main.controllers");
const usersController = require("./controllers/UserControllers");

dotenv.config();
const port = process.env.PORT || 4242;

app.use(express.json());

app.use("/", mainController);
app.use("/user", usersController);

// app.get("/", (req, res) => {
//   return res.status(200).json({ message: "OK" });
// });

app.listen(process.env.PORT || port, () => {
  console.log(`Server is started on ${port}`);
});
//임진호
