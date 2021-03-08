import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }

  handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({
      [e.target.name]: newValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({
      newTask: "",
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="newTask"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> Add Task </button>
      </div>
    );
  }
}

export default TodoForm;
