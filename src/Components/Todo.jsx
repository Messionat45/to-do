import React from 'react'
import Delete from '../Icon/Delete';
import { useState, useEffect } from 'react'
import axios from 'axios'  

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [todos, setTodos] = useState([]);
  const [idCount, setIdCount] = useState(0);

 
  //fetching the todos 
  useEffect(() => {
    async function getAllTodos(){
      try{
        const fetchedTodos = await axios.get("http://127.0.0.1:8000/api/todos/")
        // console.log(fetchedTodos.data)
        setTodos(fetchedTodos.data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllTodos()
  },[])

  const handleTodo = (e) => {
    setTodo(e.target.value);
  }

  const handleDate = (e) => {
    setDueDate(e.target.value);
  }

  // inserted todo uisng post

  const addTodo = async (e) => {
    e.preventDefault()
    
    if(todo && dueDate){
      const newTodo = {
        title: todo,
        date: dueDate,
        completed: false,
      };

      try {
        const insertResponse = await axios.post("http://127.0.0.1:8000/api/todos/create/", newTodo)
    setTodos([...todos,insertResponse.data])
    setTodo('');
    setDueDate('');
    setIdCount(idCount+1);
  }
  catch(error){
    console.log(error);
  }
  }
}

 


    const deleteTodo = async (id) => {

      try { 
        await axios.delete(`http://localhost:8000/api/todos/${id}/`)
      setTodos(todos.filter( todo => todo.id !== id ))
      }
      catch(error){
        console.log(error);
      }
    }


    const toggleComplete = async (id) => {
      try {
        const completedStatus = todos.find(todo => todo.id === id);
        const updatedTodo = {...completedStatus, completed: !completedStatus.completed}
        const updateResponse = await axios.put(`http://localhost:8000/api/todos/${id}/`,updatedTodo)
      setTodos(
        todos.map((todo) =>
          todo.id === id ? updateResponse.data : todo
        )
      );
      
    }
    catch(error){
      console.log(error)
    }
    };


const today = new Date().toISOString().slice(0,10);

const dueToday = todos.filter(todo => todo.date === today);
const dueLater = todos.filter(todo => todo.date > today);
const overDue = todos.filter(todo => todo.date < today);

  return (
    <div>
        <h2>Your To-Do's</h2>
        <div>
      <form onSubmit={addTodo}>
        
          <input type="text" 
          placeholder='add your Todo' 
          value={todo} 
          onChange={handleTodo}/>

          <input type="date"           
          value={dueDate} 
          onChange={handleDate}/>
          
          <button>ADD</button>
       </form> 
       
       <div className='todo-container'>

          <div>
            <h3>Due Later</h3>
            <ul>
              <div>
              { dueLater.map((item,index) => (
                <li key={item.id}>
                   <div className='flex-container'>
                   <input type="checkbox" 
                    checked={item.completed}
                    onChange={() => toggleComplete(item.id)}
                   />
                  {item.title}
                   {/* {item.date} */}
                <Delete onDelete={() => deleteTodo(item.id)}/>
                </div>
                </li>
            ) )} 
            </div>   
            </ul>
          </div>

          <div>
            <h3>Due Today</h3>
            <ul>
              { dueToday.map((item, index) => (
                <li key={item.id}>
                  <div className='flex-container'>
                     <input type="checkbox" 
                      checked={item.completed}
                      onChange={() => toggleComplete(item.id)}
                     />
                  {item.title}
                 {/* {item.date} */}
      
                 <Delete onDelete={() => deleteTodo(item.id)}/>
                 </div>
                 </li>))}   
            </ul>
          </div>
       
          <div>
            <h3>Over Due</h3>
            <ul>
              {overDue.map((item,index) => (
                <li className='list-item' 
                key={item.id}> 
                <div className='flex-container'> 
                <input type="checkbox" 
                 checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                />             
                  {item.title}
                  {/* {item.date} */}
                <Delete onDelete={() => deleteTodo(item.id)}/>
                </div>

                 </li>))}
            </ul>
          </div>
       </div>
        </div>
    </div>
  )
  
}
   
export default Todo



