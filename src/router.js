const express = require("express");
const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

const router = express.Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     description: Exemplo de rota get
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/tasks", tasksController.getAll);

/**
 * @swagger
 * /tasks:
 *   post:
 *     description: Exemplo de rota post
 *     requestBody:
 *       description: Parâmetros JSON no corpo da solicitação
 *       required: true
 *       content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da tarefa
 *                 example: testinho
 *               status:
 *                 type: string
 *                 description: O status da tarefa
 *                 example: lalala
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/tasks", tasksMiddleware.validadeFieldTitle, tasksController.createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     description: Exemplo de rota delete
 *     responses:
 *       204:
 *         description: Não Contem body
 */
router.delete("/tasks/:id", tasksController.deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     description: Exemplo de rota post
 *     requestBody:
 *       description: Parâmetros JSON no corpo da solicitação
 *       required: true
 *       content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da tarefa
 *                 example: testinho
 *               status:
 *                 type: string
 *                 description: O status da tarefa
 *                 example: lalala
 *     responses:
 *       204:
 *         description: Não Contem body
 */
router.put("/tasks/:id", 
    tasksMiddleware.validadeFieldTitle,
    tasksMiddleware.validadeFieldStatus,
    tasksController.updateTask
);

module.exports = router;