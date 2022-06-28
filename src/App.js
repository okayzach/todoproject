import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {
  return (
    <div className="todo-app">
      <NavBar />
      <Todo />
    </div>
  );
}

export default App;