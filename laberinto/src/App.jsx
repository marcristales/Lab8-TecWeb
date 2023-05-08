import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maze from './components/Maze/Maze'

function App() {

  return (
    <>
      <div className='main'>
        <Maze />
      </div>
    </>
  )
}

export default App
