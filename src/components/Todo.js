import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1>{this.props.task.name}</h1>
        <button
          style={{ height: "20px", alignSelf: "center" }}
          onClick={() => this.props.toggleTask(this.props.task.id)}
        >
          {this.props.task.completed ? "Complete" : "NOT Done"}
        </button>
      </div>
    );
  }
}

export default Todo;
