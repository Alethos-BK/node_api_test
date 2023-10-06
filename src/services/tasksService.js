const tasksModel = require("../models/tasksModel");

const getAll = async () => {
    return await tasksModel.getAll();
};

const createTask = async (body) => {
    return await tasksModel.createTask(body);
};

const deleteTask = async (id) => {
    return await tasksModel.deletetask(id);
};

const updateTask = async (id, body) => {
    return await tasksModel.updatetask(id, body);
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};