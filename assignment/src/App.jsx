import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import { Introduction } from './components/Introduction'
function App() {
  const [count, setCount] = useState(0)

  return (
    // <Navbar />
    <Introduction/>
  //   <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>
  )
}

export default App
