const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const taskController = require("./src/Controller/taskController.js");
const User = require("./src/Models/userModel.js");

router.post("/task", async (req, res) => {
    const idTask = await taskController.createTask(req.body);
    if (idTask) {
        console.log("Salvo id: " + idTask);
        return res.json({ id: idTask }).end();
    } else {
        return res.sendStatus(400).end();
    }
});

router.get("/task", async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const allTasks = await taskController.returnAllTasks();
    return res.end(JSON.stringify(allTasks));
});

router.delete("/task/", async (req, res) => {
    console.log(req.query);
    try {
        taskController.deleteTaskById(req.query.id);
        res.sendStatus(200);
        return res.end();
    } catch (error) {
        throw "Erro na hora de excluir";
    }
});

router.put("/task", async (req, res) => {
    taskController.updateTask(req.body);
    res.sendStatus(200);
});

router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!(email && password && firstName && lastName)) {
            res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(), 
            password: encryptedPassword,
        });

        const token = jwt.sign({ user_id: user._id, email }, "OGuizinOG", {
            expiresIn: "2h",
        });

        user.token = token;

        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
