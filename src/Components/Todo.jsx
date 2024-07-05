import React from 'react'
import { useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  }

  const handleDate = (e) => {
    setDueDate(e.target.value);
  }

  const addTodo = () => {
    if(todo && dueDate){
    setTodos([...todos,{text:todo, date: dueDate}])
    setTodo('');
    setDueDate('');
  }
    }


const today = new Date().toISOString().slice(0,10);

const dueToday = todos.filter(todo => todo.date === today);
const dueLater = todos.filter(todo => todo.date > today);
const overDue = todos.filter(todo => todo.date < today);





  return (
    <div>
        <h2>Your To-Do's</h2>

        <div>
          <input type="text" 
          placeholder='add your Todo' 
          value={todo} 
          onChange={handleTodo}/>

          <input type="date" 
          value={dueDate} 
          onChange={handleDate}/>
          
          <button onClick={addTodo}>ADD</button>

<div className='todo-container'>

          <div>
            <h3>Due Later</h3>
            <ul>
              { dueLater.map((item,index) => (
                <li key={index}>{item.text}</li>
            ) )}    
            </ul>
          </div>

          <div>
            <h3>Due Today</h3>
            <ul>
              { dueToday.map((item, index) => (
                <li key={index}>{item.text}</li>))}   
            </ul>
          </div>
       
          <div>
            <h3>Over Due</h3>
            <ul>
              {overDue.map((item,index) => (
                <li key={index}> {item.text}</li>))}
            </ul>
          </div>
       </div>
        </div>
    </div>
  )
}

export default Todo