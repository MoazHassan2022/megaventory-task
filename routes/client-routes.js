const express = require("express");
const clientController = require("../controllers/client-controller");

const router = express.Router();

router.post("/", clientController.insertClient);

module.exports = router;
