const express = require("express");
const router = express.Router();
const itemContr = require("../controllers/item.controller");

router.post("/item");
router.get("/item");
router.put("/item/:id");
router.delete("/item/:id");

module.exports = router;
