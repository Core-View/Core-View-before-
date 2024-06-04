const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const signUpRouter = require("./signUpRouter.js");
const loginRouter = require("./loginRouter.js");

app.use(cors());
app.use(express.json());

app.use("/sign", signUpRouter);
app.use("/sign", loginRouter);

console.log(process.env.MAIL_REFRESH);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
