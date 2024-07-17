import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="btn">
       <Link to='/Signup'><button>Signup</button></Link> 
       <Link to='/Login'><button>Login</button></Link>
    </div>
  )
}

export default Home