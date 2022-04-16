const TaskModel = require("../Models/taskModel.js");

const createTask = async (task) => {
    try {
        const modelTask = await TaskModel.create({
            content: task.content,
            status: task.status,
            date: task.date,
        });
        let saveReturn = await modelTask.save();
        console.log(saveReturn);
        return saveReturn._id;
    } catch (e) {
        console.log(e);
        return undefined;
    }
};

const returnAllTasks = async () => {
    const allTasks = await TaskModel.find();
    return allTasks;
}

const deleteTaskById = async (taskId) => {
    return await TaskModel.deleteOne({ _id: taskId });
}

module.exports = {
    createTask: createTask,
    returnAllTasks: returnAllTasks,
    deleteTaskById: deleteTaskById
};
