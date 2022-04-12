const express = require("express");
const router = express.Router();
const taskController = require("./src/Controller/taskController.js");

router.post("/task", async (req, res) => {
    const success = await taskController.createTask(req.body);
    if (success) {
        console.log("Salvo");
        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }
});

router.get("/task", async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const allTasks = await taskController.returnAllTasks();
    return res.end(JSON.stringify(allTasks));
});

module.exports = router;
