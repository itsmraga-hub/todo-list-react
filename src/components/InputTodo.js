import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoItemProps } = this.props;
    if (title.trim()) {
      addTodoItemProps(title);
        this.setState({
        title: '',
    });
    } else {
      alert('Please write item')
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          className="input-text"
          value={title}
          onChange={this.onChange}
          name="title" />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
