import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter] = useState(15)

  //let counter=15

  const addvalue= ()=>{
    counter=counter+1
    setcounter(counter)
    //console.log("value added",Math.random(),counter);

  }

  const removevalue=()=>{
    if(counter>0){
    setcounter(counter-1)
    }
    else{
      const boom=document.getElementById("boom")
      boom.innerHTML="Cant be removed further"
    }
  }

  return (
    <>
     
     <h1>Chai aur React</h1>
     <h2>counter value:{counter}</h2>

     <button
     onClick={addvalue}
     >Add value{counter}</button>
     <br />
     <button
     onClick={removevalue}
     >Remove value{counter}</button>
     <div id="boom"></div>
     <p>Footer:{counter}</p>
    </>
  )
}

export default App
