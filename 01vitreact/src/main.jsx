import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return (
        <div>
            <h1>Custom app | chai!</h1>
        </div>
    )
}

// const reactElement={
//     type:'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google',
// }

const anotheruser=" chai aur react"

const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'click me to visit google',
    anotheruser
)

const anotherelement=(
   <a href="https://google.com" target='_blank'>Visit google</a>
)

createRoot(document.getElementById('root')).render(
  
    // <Myapp />
    // anotherelement
    // reactElement
    // reactElement
     <App />
)
