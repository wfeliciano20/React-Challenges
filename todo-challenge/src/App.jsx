import {useState} from 'react';
import './App.css';
import TodosForm from './components/TodosForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {task:'Learn React', completed:false},
    {task:'Learn Redux', completed:false},
    {task:'Learn React-Redux', completed:false}
  ]);

  const addTodo = (task) => {
    setTodos([...todos, {task, completed:false}]);
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div className="App">
      <header className="Header">
        <h1>Todo List</h1>
      </header>
      <div className="Content">
        <TodosForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
