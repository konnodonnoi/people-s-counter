
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

//for the addition

const add = () => {
  setCount (prev => count + 1)
}

//for the reset

const minus = () => {
  setCount  (prev => count * 0)
}

  return (
    <div>
<h1>
people entered:
</h1>

<button className='button' onClick={reset}>reset</button>
<h2>
  {count}
  </h2>
  <button className='button' onClick={add}>increment</button>
  
    </div>
  );
}

export default App;
