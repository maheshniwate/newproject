import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Carosel from './components/Carosel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header/>
      <Carosel/>
    </div>
  )
}

export default App
