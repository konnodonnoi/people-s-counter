
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

//for the addition

const add = () => {
  setCount (prev => count + 1)
}

//for the reset

const reset = () => {
  setCount  (prev => count * 0)
}

  return (
    <div>
<h1>
people entered:
</h1>


<h2>
  {count}
  </h2>
  <div>
  <button className='increment-btn' onClick={add}>increment</button>
  </div>
  <button className='button' onClick={reset}>reset</button>
    </div>
  );
}

export default App;
