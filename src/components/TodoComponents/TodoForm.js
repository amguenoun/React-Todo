import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newTask = {
            name: this.state.task,
            id: Date.now(),
            completed: false,
        };
        this.props.addTask(newTask);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>Add a New Task: </label>
                <input
                    type="text"
                    name="task"
                    placeholder="Add Task"
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form >
        )
    }
}

export default TodoForm;