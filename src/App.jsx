import { useState } from 'react'
// import Register from "./Register"
import './App.css'
import PersistLogin from './PersistLogin';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  <PersistLogin />
    </>
  )
}

export default App
