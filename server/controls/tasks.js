const task = require('../models/tasks')

/** controllers **/

// get all the tasks in the DB
const getAllTasks = async (req, res) => {
    try{
        const event = await task.find({}).exec();
        res.status(201).json({event});
    } catch(err){
        res.status(500).json({msg: err});
    }
}
// create a task (post to DB)
const createTask = async (req, res) => {
    try{
        const event = await task.create(req.body);
        res.status(201).json({event});
    } catch(err){
        res.status(500).json({msg: err});
    }
}
// query the tasks based on priority
const getTaskByTaskPriority = async (req, res) => {
    try{
        const pri = req.params.priority;
        const event = await task.find({priority : { $eq: pri }}).exec();
        if(event.length == 0) return res.status(404).json({msg:`No tasks with priority: ${pri}`});
        res.status(201).json({event});
    } catch(err){
        res.status(500).json({msg: err});
    }
}
// query the tasks based on completions
const getTaskCompleted = async (req, res) => {
    try{
        const event = await task.find({completed : { $eq: true }}).exec();
        if(!event) return res.status(404).json({msg:`No tasks are completed`});
        res.status(200).json({event});
    } catch(err){
        res.status(500).json({msg: err});
    }
}
const getTaskIncomplete = async (req, res) => {
    try{
        const event = await task.find({completed : { $eq: false }}).exec();
        if(!event) return res.status(404).json({msg:`No tasks are incomplete`});
        res.status(200).json({event});
    } catch(err){
        res.status(500).json({msg: err});
    }
}
// get one of the tasks based on specific requirement
const getTaskByTaskID = async (req, res) => {
    try{
        const {id:taskID} = req.params;
        const event = await task.findOne({_id:taskID});
        if(!event) return res.status(404).json({msg:`No task with id: ${taskID}`});
        res.status(200).json({event});
    } catch(err){
        res.status(500).json({msg: err});
    }
}
// update one of the tasks based on the specific requirement
const updateTask = async (req, res) => {
    try{
        const {id:taskID} = req.params;
        const event = await task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true
        });
        if(!event) return res.status(404).json({msg:`No task with id: ${taskID}`});
        res.status(200).json({event});
    } catch(err){
        res.status(500).json({msg: err});
    }
}
// delete one of the tasks based on the specific requirement
const deleteTask = async (req, res) => {
    try{
        const {id:taskID} = req.params;
        const event = await task.findOneAndDelete({_id:taskID});
        if(!event) return res.status(404).json({msg:`No task with id: ${taskID}`});
        res.status(200).json({event});
    } catch(err){
        res.status(500).json({msg: err});
    }
}
// get time elapsed based on the id
const getTimeElapsed = async (req, res) => {
    try{
        const {id:taskID} = req.params;
        const event = await task.findOne({_id:taskID});
        console.log(event);
        if(!event) return res.status(404).json({msg:`No task with id: ${taskID}`});
        const eventTime = event.timeElapsed;
        res.status(200).json({eventTime});
    } catch(err){
        res.status(500).json({msg: err});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTaskByTaskPriority,
    getTaskCompleted,
    getTaskIncomplete,
    getTaskByTaskID,
    updateTask,
    deleteTask,
    getTimeElapsed
}