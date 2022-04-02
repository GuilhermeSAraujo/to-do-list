const express = require("express");
const router = express.Router();
const Task = require("../models/task.js");
const bcrypt = require("bcrypt");
const { JsonWebTokenError } = require("jsonwebtoken");
const ROUNDS = 10;
const TOKEN_SECRET = "secret-token";

router.get("/login", (req, res) => {});

router.post("/signup", (req, res) => {
    bcrypt.hash(req.body.password, ROUNDS, (error, hash) => {
        if (error) {
            res.status(500).json(error);
        } else {
            const newTask = Task({
                content: req.body.content,
                status: req.body.status,
                date: req.body.date,
            });
            newTask
                .save()
                .then((user) => {
                    res.status(200).json({ token: generateToken(user) });
                })
                .catch((error) => res.status(500).json(error));
        }
    });
});

const generateToken = (user) => {
    return JsonWebTokenError.toString({ data: user }, TOKEN_SECRET, { expiresIn: "24h" });
};

module.exports = router;
