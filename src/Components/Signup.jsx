import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

  return (
    <div>
        <h2>Sign Up</h2>
    <form action="">
    <div><label htmlFor="">Name: </label>
    <input type="text" placeholder='Enter your Name'/></div>

    <div><label htmlFor="">Email: </label>
    <input type="text" placeholder='Enter your Email'/></div>

    <div><label htmlFor="">Password: </label>
    <input type="password" placeholder='Enter your Password'/></div>


    <div>
    <input type="submit" value='Signup' onClick={handleLoginRedirect}/>
    </div>

    </form>
    </div>
  )
}

export default Signup