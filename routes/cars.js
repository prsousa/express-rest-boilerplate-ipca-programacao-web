const express = require("express");
const router = express.Router();

const carController = require("../controllers/carController");

/* GET cars listing. */
router.get("/", carController.list);

module.exports = router;
