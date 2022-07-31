
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

const add = () => {
  setCount (prev => count + 1)
}

const minus = () => {
  setCount  (prev => count - 1)
}

  return (
    <div>
<h1>
people entered:
</h1>

<button className='button' onClick={minus}>-</button>
<h2>
  {count}
  </h2>
  <button className='button' onClick={add}>+</button>
  
    </div>
  );
}

export default App;
