import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const initTasks = [
  {
    id: "555",
    name: "Change Laundry",
    completed: false,
  },
  {
    id: "666",
    name: "Fix car",
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: initTasks,
    };
  }

  clearAll = () => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        console.log(task);
        return {
          ...task,
          completed: true,
        };
      }),
    });
  };

  toggleTask = (clickedOnId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === clickedOnId) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  addTask = (newToDo) => {
    const newTask = {
      id: new Date(),
      name: newToDo,
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <div>
          <TodoList
            tasks={this.state.tasks}
            toggleTask={this.toggleTask}
            clearAll={this.clearAll}
          />
        </div>
      </div>
    );
  }
}

export default App;
