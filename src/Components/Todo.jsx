import React from 'react'


const Todo = () => {
    
  return (
    <div>
        <h2>Your To-Do's</h2>

        <div>
          <input type="text" placeholder='add your Todo' />
          <input type="date" /><button>ADD</button>
<div className='todo-container'>
          <div>
            <h3>Due Later</h3>
            <ul>
              <li>Buy Grocery</li>
              <li>Buy Milk</li>
              <li>Pay Rent</li>
            </ul>
          </div>
          <div>
            <h3>Due Today</h3>
            <ul>
              <li>Buy Grocery</li>
              <li>Buy Milk</li>
              <li>Pay Rent</li>
            </ul>
          </div>
       
          <div>
            <h3>Over Due</h3>
            <ul>
              <li>Buy Grocery</li>
              <li>Buy Milk</li>
              <li>Pay Rent</li>
            </ul>
          </div>
       </div>
        </div>
    </div>
  )
}

export default Todo