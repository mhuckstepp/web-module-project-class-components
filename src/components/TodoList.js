import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((task) => {
          return (
            <Todo
              key={task.id}
              task={task}
              toggleTask={this.props.toggleTask}
            />
          );
        })}
        <button onClick={() => this.props.clearAll()}> Clear all tasks </button>
      </div>
    );
  }
}

export default TodoList;
