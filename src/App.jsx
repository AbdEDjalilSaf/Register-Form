import { useState } from 'react'
// import Register from "./Register"
import './App.css'
import UserJWT from './UserJWT';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  <UserJWT />
    </>
  )
}

export default App
