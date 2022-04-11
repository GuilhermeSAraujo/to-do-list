const TaskModel = require("../Models/taskModel.js");

const createTask = async (task) => {
    try {
        const modelTask = await TaskModel.create({
            content: task.content,
            status: task.status,
            date: task.date,
        });
        modelTask.save();
        return true;
    } catch (e) {
        return false;
    }
};

module.exports = {
    createTask: createTask,
};
