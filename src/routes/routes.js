const express = require("express");
const {homePageController, postValueController} = require("../controllers/controller")

const router = express.Router();

router.get("/", homePageController);

router.post('/value', postValueController);

module.exports = router;
