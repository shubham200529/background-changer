import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')
  //function changeColor(color){
   // setcolor(color)
  //}
    
  
// w-full means to full the width,h-screen gives height of 100vh
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
        <button onClick={() => setcolor('red')}
        className='outline-none px-4 py-1 rounded-full  shadow lg text-black' style={{backgroundColor: 'red'}}
        >Red</button>
        <button onClick={() => setcolor('Blue')}
         className='outline-none px-4 py-1 rounded-full  shadow lg text-black'
         style={{backgroundColor: 'blue'}}>Blue</button>
      </div>
    </div>
  )
}

export default App