const express = require("express");
const router = express.Router();
const user = require("./users.router");
const item = require("./item.router");
const transaction = require("./transaction.router");

router.get("/", (req, res) => {
  res.send("Hello Dunia! Selamat datang di main route api v1");
});

router.use("/user", user);
router.use("/item", item);
router.use("/order", transaction);

module.exports = router;
