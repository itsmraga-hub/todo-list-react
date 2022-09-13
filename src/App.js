import React, { PureComponent } from 'react';

// Components
import TodoContainer from './components/TodoContainer';

// Stylesheet
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <TodoContainer />
    );
  }
}

export default App;
