import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'

const Signup = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [signup, setSignup] = useState([]);
   const navigate = useNavigate();

    

    const handleName = (e) => {
        setName(e.target.value);
      }

      const handleEmail = (e) => {
        setEmail(e.target.value);
      }

      const handlePassword = (e) => {
        setPassword(e.target.value);
      }

      const handleSignup = async (e) => {
            e.preventDefault()

            if(name && email && password){
                const newUser = {
                    name: name,
                    email: email,
                    password: password,
                }

                try {
                    const insertSignup = await axios.post("http://127.0.0.1:8000/api/account/register/", newUser)
                    setSignup([...signup,insertSignup.data])
                    setName('');
                    setEmail('');
                    setPassword('');
                    navigate('/login');
                }
                catch(error){
                    console.log(error);
                  }


            }

    };

   return (
    <div>
        <h2>Sign Up</h2>

    <form action="">
    <div>
        <label htmlFor="">Name: </label>
        <input type="text" 
        placeholder='Enter your Name'
        value={name}
        onChange={handleName}/>
    </div>

    <div>
        <label htmlFor="">Email: </label>
        <input type="text"
        placeholder='Enter your Email'
        value={email}
        onChange={handleEmail}/>
    </div>

    <div>
        <label htmlFor="">Password: </label>
        <input type="password" 
        placeholder='Enter your Password'
        value={password}
        onChange={handlePassword}/>
    </div>


    <div>
        <input type="submit" 
        value='Signup' 
        onClick={handleSignup}/>
    </div>

    </form>
    </div>
  )
}

export default Signup