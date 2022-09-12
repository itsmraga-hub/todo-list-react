import React, { PureComponent } from 'react';

import styles from './TodoItem.module.css';

class TodoItem extends PureComponent {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { todo, handleChangeProps, deleteTodoProps } = this.props;

    return (
      <li className={styles.item}>
        <input type="checkbox"
          className={styles.checkbox}
          checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
