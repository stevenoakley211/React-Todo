import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const tasks = [
  {
    name:"example",
  id: 123,
  finished: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // 
  state = {
    taskList : tasks,
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addNewTask = newTaskName => {
    const newState ={
      ...this.state,
      taskList: [
        ...this.state.taskList,
        {name: newTaskName, finished: false, id: Date.now() }
      ]
    };
    this.setState(newState)
  };
  toggleFinished = id => {
    const newState = {
      ...this.state,
      taskList: this.state.taskList.map(task => {
        if(task.id === id){
          return {
            ...task,
            finished: !task.finished
          };
        }
        return task;
      })
    };
    this.setState(newState)
  };

  clearFinished = () => {
    const newState ={
      ...this.state,
      taskList: this.state.taskList.filter(task =>{
        return !task.finished;
      })
    };
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div>
          <TodoForm addNewTask={this.addNewTask}/>
        </div>
        <TodoList 
        tasks={this.state.taskList}
        toggleFinished = {this.toggleFinished}
        clearFinished = {this.clearFinished}
        />
      </div>
    );
  }
}

export default App;
