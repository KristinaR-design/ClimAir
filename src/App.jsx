import { useState } from 'react'

import './App.css'
import LeftPanel from './components/LeftPanel.jsx'
import Header from './components/Header.jsx'
import Dash from './components/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

      <Dash />
      <Header />
      <LeftPanel />

    </>
  )
}

export default App
