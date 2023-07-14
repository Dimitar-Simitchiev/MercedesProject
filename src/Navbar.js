import { Link, useMatch, useResolvedPath } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect} from "react";
import {  useNavigate, } from "react-router-dom";
import './Navbar.css'


export default function Navbar() {
 const item=localStorage.getItem("password");
  const [page, setPage] = useState()
  const navigate=useNavigate();

  
    
  
  const Logout = (e) => {
   
    e.preventDefault()
    document.getElementById("log").style.display = "flex";
    document.getElementById("reg").style.display = "flex";
     document.getElementById("menu").style.display = "none";
 
    
    fetch('https://mercedesserver.onrender.com/jsonstore/logetuser', {
  method: 'DELETE',
})
.then(res => res.text()) 
.then(res => console.log(res))

 

   navigate('/')
  
   
 }
  
   
  
   

  

  
 


  

  

   return (
    <nav className="nav">
  
     
      <Link to="/" className="site-title">
        HOME
      </Link>
      <div>
      <ul>
        <li id="log"> <CustomLink to="/login">Login</CustomLink></li>
        <li id="reg">  <CustomLink  to="/register">Register</CustomLink></li>
         <div id="menu"> <div class="dropdown">
    <button class="dropbtn">MENU
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <CustomLink  to="/about">About</CustomLink>
    <CustomLink  to="/createcar">Create</CustomLink>
    <CustomLink  to="/morecars">Morecars</CustomLink>
    <CustomLink t o="/" onClick={Logout} >Logout</CustomLink>
    </div>
  </div>
        </div>
       
     
       </ul> 
      
    </div>
     
      
    </nav>
   
    
 
  )


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
}