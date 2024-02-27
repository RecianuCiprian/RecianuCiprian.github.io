import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React For a login Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          I've clicked on this link for {count}
        </button>
      </div>
    </>
  )
}

export default App
