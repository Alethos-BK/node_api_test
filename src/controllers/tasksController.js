const tasksModel = require("../models/tasksModel");

const getAll = async (_req, res) => {
    const tasks = await tasksModel.getAll();

    return res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body);

    return res.status(201).json({ message: createdTask });
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.deletetask(id);

    return res.status(204).json();
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.updatetask(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};