import React from 'react'

const Login = () => {
  return (
    <div>
        <form action="">
            <div><label htmlFor="">Email: </label>
            <input type="text" placeholder='Enter youe email'/></div>

            <div><label htmlFor="">Password: </label>
            <input type="password" placeholder='Enter your pass'/></div>

            <div>
    <input type="submit" value='Login'/>
    </div>
        </form>
    </div>
  )
}

export default Login