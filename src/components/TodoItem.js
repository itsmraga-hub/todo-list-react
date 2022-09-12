import React, { Component } from 'react';

import styles from './TodoItem.module.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }
  }
  handleEditing = () => {
    this.setState({
      editing: true,
    })
    console.log('Edit mode');
  }
  
  handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { todo, handleChangeProps, deleteTodoProps, setUpdateProps } = this.props;
    const { id, title, completed } = todo;

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input type="checkbox"
            className={styles.checkbox}
            checked={completed} onChange={() => handleChangeProps(id)} />
          <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          value={title}
          className={styles.textInput}
          onChange={(e) => setUpdateProps(e.target.value, id)}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
