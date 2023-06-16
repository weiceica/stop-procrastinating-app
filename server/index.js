// imports
const express = require('express'); // import from express
const app = express();
const tasks = require('./routes/tasks'); // import from routes
const connectDB = require('./db/connect');
const cors = require('cors');
require('dotenv').config();

// middleware
app.use(cors());

app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks', tasks);

// Our REST API
/*
 --------note we have various requests
    app.get('/api/v1/tasks')       - get all tasks
    app.post('/api/v1/tasks')      - create task
    app.get('/api/v1/tasks/:id')    - get one task
    app.patch('/api/v1/tasks/:id')  - update task
    app.delete('/api/v1/tasks/:id') - delete task
*/


const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (err) {
        console.log(err);
    }
}

start();