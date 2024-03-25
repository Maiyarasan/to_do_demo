import './App.css';
import {useState} from 'react';

function App() {
  const [todo, settodo] = useState([]);;
  const [inputValue, setInputValue] = useState('')
  
  const add=()=>{
    settodo([...todo , inputValue]);
    setInputValue('');
   
  }
  const del=(index)=>{
    const  newTodo=[...todo]
    newTodo.splice(index,1);
    settodo(newTodo)
  }
  
  return (
    <div className='App'>
    <h1>Maiyarasan's Todo App</h1>
    <div className='container'>
      <div>
        <input 
          type='text'
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <button onClick={add}>Add</button>
        <ul>
          {todo.map((addon , index)=>(
             <li key={index}>
              {addon} 
              <button onClick={del}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default App;
