const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db')

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/tasks',(req,res)=>{
    //res.send('list of all task')
    const TASK_QUERY = "select * from todoapp.tasks";
    connection.query(TASK_QUERY, (err, response)=>{
        if(err) console.log(err)
        else res.send(response)
    })
})

app.post('/addTask',(req,res)=>{
    const ADD_QUERY = "insert into todoapp.tasks (tasks) values ('$(req.body.task)')"
    connection.query(ADD_QUERY, (err)=>{
        if(err) console.log(err)
        else res.send('proceed ahead...you can add your tasks to be done')
    })
    
})

app.delete('/deleteTask/:taskid',(req,res)=>{
    //res.send('Deleted Tasks')
    console.log(req.params.taskid)
    const DELETE_QUERY = 'DELETE FROM todoapp.tasks where (taskid =${req.params.taskid})'
    connection.query(DELETE_QUERY, (err,req)=>{
        if(err) console.log(err)
        else res.send('task has been deleted')
    })
})

app.listen(4000, ()=> {
    console.log('running on port 4000')
})