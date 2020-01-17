import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountWrapper from './components/Counter/CountWrapper';
import TodoWrapper from './components/Todo/TodoWrapper';

function App() {
  return (
    <div className="App">
      <CountWrapper></CountWrapper>
      <TodoWrapper></TodoWrapper>
    </div>
  );
}

export default App;
