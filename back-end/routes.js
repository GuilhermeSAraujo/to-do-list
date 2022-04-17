const express = require("express");
const router = express.Router();
const taskController = require("./src/Controller/taskController.js");

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
    res.setHeader('Content-Type', 'application/json');
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
});

module.exports = router;
