const express = require("express");
const { Router } = require("express");
const categoryMidleware = require("./categoryRouter.js");
const productMidleware = require("./productRouter.js");
const userMidleware = require("./userRouter.js");

const server = express();

server.use("/user", userMidleware);
server.use("/product", productMidleware);
server.use("/category", categoryMidleware);

server.get("/", (req, res) => {
  res.status(200).send("asdasdsadsadsad");
});

module.exports = server;
