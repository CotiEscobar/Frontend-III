import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ItemList></ItemList>
    </div>
  )
}

export default App
