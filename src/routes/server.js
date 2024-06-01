// src/routes/server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const signUpRouter = require("./signUpRouter");
const loginRouter = require("./loginRouter");
const virtualCompilerRouter = require("./virtualCompilerRouter");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/sign", signUpRouter);
app.use("/login", loginRouter);
app.use("/compile", virtualCompilerRouter);

console.log(process.env.MAIL_REFRESH);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
