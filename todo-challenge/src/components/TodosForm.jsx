import React,{useState} from 'react';
import './TodosForm.css';

const TodosForm = ({addTodo}) => {
  const [todo,setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!todo){
      return;
    }
    addTodo(todo);
    setTodo('');
  }

  const handleChange = (e) => {
    setTodo(e.target.value);  
  }

  
  return (
    <div className="Form-Container">
      <form className='Form' onSubmit={handleSubmit}>
        <label className = "label" htmlFor="todo">Add a New Todo</label>
        <input className='Input' type="text" name="todo" value={todo || ''} onChange={handleChange} />
        <button className='Button' type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default TodosForm;
