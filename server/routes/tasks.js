const express = require('express');

const router = express.Router();
const {
    getAllTasks,
    createTask,
    getTaskByTaskPriority,
    getTaskCompleted,
    getTaskIncomplete,
    getTaskByTaskID,
    updateTask,
    deleteTask,
    getTimeElapsed
} = require('../controls/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/priority/:priority').get(getTaskByTaskPriority);
router.route('/completion/completed').get(getTaskCompleted);
router.route('/completion/incomplete').get(getTaskIncomplete);
router.route('/:id').get(getTaskByTaskID).patch(updateTask).delete(deleteTask);
router.route('/time/:id').get(getTimeElapsed);

module.exports = router;