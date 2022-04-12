const express = require("express");
const router = express.Router();
const taskController = require("./src/Controller/taskController.js");

router.post("/task", async (req, res) => {
    console.log(req.body.content);
    const success = await taskController.createTask(req.body);
    if (success) {
        console.log("Salvo");
        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;
