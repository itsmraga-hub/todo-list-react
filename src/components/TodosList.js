import React, { PureComponent } from 'react';
import PropType from 'prop-types';

import TodoItem from './TodoItem';

class TodosList extends PureComponent {
  render() {
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdateProps,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdateProps={setUpdateProps}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropType.arrayOf.isRequired,
  handleChangeProps: PropType.func.isRequired,
  deleteTodoProps: PropType.func.isRequired,
  setUpdateProps: PropType.func.isRequired,
};

export default TodosList;
