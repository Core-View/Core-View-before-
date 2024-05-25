const express = require("express");
const app = express();
const cors = require("cors");
const signUpRouter = require("./signUpRouter.js");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/sign", signUpRouter);
console.log(process.env.MAIL_REFRESH);
app.listen(3000, () => {
  console.log("Server is running on port");
});
