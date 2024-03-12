import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effec from './Effec'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Effec />
    </>
  )
}

export default App
