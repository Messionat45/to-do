import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        {/* <Route path='/' element={<Navigate to='/Home'/>}></Route> */}
      <Route path='/' element={<Home/>} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
     </Router>
    </div>
  );
}
 
export default App;
