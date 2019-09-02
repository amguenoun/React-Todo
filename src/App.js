import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoSearch from "./components/TodoComponents/TodoSearch";

import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [{
        name: 'Organize Garage',
        id: 1528817077286,
        completed: false
      }]
    }
  }

  addTask = (newTask) => {
    this.setState({ tasks: [...this.state.tasks, newTask] });
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    })
  }

  toggleComplete = (taskID) => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === taskID) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        else {
          return item;
        }
      })
    })
  }

  searchByName = (name) => {
    const matches = this.state.tasks.filter(task => task.name.toLowerCase().match(name.toLowerCase()) !== null);
    this.setState({ tasks: matches });
  }

  runMemory = () => {
    if (localStorage.length !== 0) {
      this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) })
    }
  }

  componentDidMount() {
    this.runMemory();
  }

  componentDidUpdate() {
    window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  render() {
    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <TodoSearch searchByName={this.searchByName} />
        <TodoList tasks={this.state.tasks} toggleComplete={this.toggleComplete} />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
