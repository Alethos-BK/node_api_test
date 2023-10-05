const express = require("express");
const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksController.getAll);

router.post("/tasks", tasksMiddleware.validadeFieldTitle, tasksController.createTask);

router.delete("/tasks/:id", tasksController.deleteTask);

router.put("/tasks/:id", 
    tasksMiddleware.validadeFieldTitle,
    tasksMiddleware.validadeFieldStatus,
    tasksController.updateTask
);

module.exports = router;