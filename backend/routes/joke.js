const express = require("express");

const {
    countAllJokes,
    getJoke,
    saveJoke
} = require("../controller/joke");

const router = express.Router();

router.get("/jokes", countAllJokes);
router.get("/joke/:id", getJoke);
router.post("/joke", saveJoke);

module.exports = { routes: router };