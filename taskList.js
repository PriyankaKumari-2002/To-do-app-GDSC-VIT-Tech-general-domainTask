import React from 'react';
import axios from 'axios';

class TaskList extends React.Component {
    state = {
        task : "", //current user entered task
        taskList: [] //hold all my tasks
    }

    getTaskList = () => {
        axios.get('http://localhost:4000/tasks')
        .then((response) => response.data)
        .then(response => this.setState({taskList: response}));
    }
    onDeleteClick = () => {
          //console.log('inside delete')
          axios.delete('http://localhost:4000/deleteTask/${taskid}')
          this.getTaskList();
    }

    onSubmitClick = () => {
        axios.post('http://localhost:4000/addTask', {
            task: this.state.task,
        });
        this.getTaskList();
    }
    render() {
        return (
            <div>
                <h3>List of Tasks</h3>
                <div className="ui input">
                <input value={this.state.task} onChange={e => this.setState({
                    task: e.target.value
                })}placeholder="enter your tasks.."/>
                </div>
                
                <button className="ui red button basic" onClick={() => this.onSubmitClick()}>Submit</button>
                <hr />
                <div className="ui cards">
                {this.state.taskList.map((task) => (
                    <div className="card">
                    <div className="content">
                        <div className="meta">
                            {task.tasks}
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button">Done</div>
                                <div className="ui basic yellow button" onClick={
                                    () => this.onDeleteClick()
                                }>Delete</div>
                            </div>
                        </div>
                    </div>

                    </div>
                    ))}
                </div>
            </div>

            
            
        )
    }
}

export default TaskList