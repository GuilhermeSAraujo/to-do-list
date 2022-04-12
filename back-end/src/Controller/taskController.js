const { all } = require("../../routes.js");
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

const returnAllTasks = async () => {
    const allTasks = await TaskModel.find();
    return allTasks;
}

module.exports = {
    createTask: createTask,
    returnAllTasks: returnAllTasks
};
