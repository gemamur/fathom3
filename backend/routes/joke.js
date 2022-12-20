import { Router } from "express";

import { countAllJokes, getJoke, saveJoke } from "../controller/joke";

const router = Router();

router.get("/jokes", countAllJokes);
router.get("/joke/:id", getJoke);
router.post("/joke", saveJoke);

export const routes = router;