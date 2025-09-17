import Counter from "./Counter"
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="font-mono flex flex-col items-center text-8xl font-bold mb-4 text-red-600 pt-45 pb-15">Counter App</h1>
      <Counter />
    </div>
  )
}

export default App
