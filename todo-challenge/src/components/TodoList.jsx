import React from 'react'
import TodoElement from './TodoElement';
import './TodoList.css';

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div className="TodoList-Container">
      <ul className="List">
        {todos.map((todo,index) => {
          return <TodoElement key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
        })
        }
      </ul>
    </div>
  )
}

export default TodoList
