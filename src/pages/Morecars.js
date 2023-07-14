import { useEffect, useState } from "react";
import CarsCard from "./CarsCard"
const url='https://mercedesserver.onrender.com/jsonstore/mercedes'
export default function Morecars() {
  const[cars,setCars]=useState([])
  
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(x=>Object.values(x))
    .then(result=>{
     setCars(result)
  

    })
    
  },[])
    
     
    
  
    return ( 
    <div className="App">
      
     {cars.map(x=><CarsCard cars={x}/>)}
    
    </div>
    );
  }


    
   
  