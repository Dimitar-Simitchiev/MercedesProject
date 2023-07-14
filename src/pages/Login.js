
import {useState,useEffect} from "react";


import {  useNavigate, } from "react-router-dom";
import './Login.css'
const url='https://mercedesserver.onrender.com/jsonstore/users'
export default function Login() {  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

    const[user,setUser]=useState([])

  
    useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(x=>Object.values(x))
      .then(result=>{
        
      setUser(result)
     console.log(user)
  
      })
      
      
    },[])

    const submit = (e) => {
      e.preventDefault();
      let userche=JSON.stringify(email)
    for (let i = 0; i < user.length; i++) {
      if (user[i].password===password&&user[i].username===email) {
       console.log("work")
        document.getElementById("log").style.display = "none";
        document.getElementById("reg").style.display = "none";
        document.getElementById("menu").style.display = "flex";
        const _userid=user[i]._id
        let regobj = { email, password,_userid};

        console.log(regobj)
        fetch("https://mercedesserver.onrender.com/jsonstore/logetuser", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(regobj)
         
      })
     


          navigate('/')
      
      
    }
   
    }

     
      
    

     
  }

   

    return (
     
      <form action="action_page.pht" id='form' onSubmit={submit}>
      <div className="container2">
      <h1>Login</h1>
      <p>Please fill in this form to login in your account.</p>
      <label htmlFor="email"><b>Email</b></label>
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                       onChange={e => setEmail(e.target.value)}
                />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                       onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
           
      <button type="submit" className="registerbtn" >Submit</button>
      </div>
      </form>
      
        
           
      
    )
  
    
   
  }