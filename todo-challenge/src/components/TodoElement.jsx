import {useState} from 'react';
import { BiTrash, BiCheck } from "react-icons/bi";

import './TodoElement.css';

const TodoElement = ({todo, index, deleteTodo}) => {
  const [done,setDone] = useState(false);
  return (
      <li className="Todo" ><span className={`${done?'Checked':''}`}>{todo.task}</span> <span><button onClick={()=> setDone(!done)}><BiCheck className="Button-Success" /></button> {todo.completed ? '' : <button onClick={() => deleteTodo(index)}><BiTrash className="Button-Danger" /></button> }</span> </li>
  )
}

export default TodoElement
