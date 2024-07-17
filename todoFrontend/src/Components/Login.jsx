import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleTodoRedirect = () => {
    navigate('/Todo')
  };

  return (
    <div>
      <h2>Login</h2>
        <form action="">
            <div><label htmlFor="">Email: </label>
            <input type="text" placeholder='Enter youe email'/></div>

            <div><label htmlFor="">Password: </label>
            <input type="password" placeholder='Enter your pass'/></div>

            <div>
    <input type="submit" value='Login' onClick={handleTodoRedirect}/>
    </div>
        </form>
    </div>
  )
}

export default Login