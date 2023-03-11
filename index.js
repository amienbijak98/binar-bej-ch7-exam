const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const routers = require("./routers/routers");
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World! This is main route");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//ROUTING
app.use("/api/v1", routers);
