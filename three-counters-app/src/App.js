import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const increaseSingleCounter = (CounterSetter) => {
    CounterSetter(prevCounter => prevCounter + 1);
  }

    const decreaseSingleCounter = (CounterSetter) => {
    CounterSetter(prevCounter => prevCounter - 1);
  }

  const increaseAllCounters = () => {
    setCount1(prevCounter => prevCounter + 1);
    setCount2(prevCounter => prevCounter + 1);
    setCount3(prevCounter => prevCounter + 1);
  }

  const decreaseAllCounters = () => { 
    setCount1(prevCounter => prevCounter - 1);
    setCount2(prevCounter => prevCounter - 1);
    setCount3(prevCounter => prevCounter - 1);
  }
  
  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={appStyles}>
      <h1>Three Counters Challenge</h1>
      <h2>Counter 1:</h2>
      <div>
        <h2>{count1}</h2>
        <button onClick={increaseSingleCounter.bind(this,setCount1)}>+</button>
        <button onClick={decreaseSingleCounter.bind(this,setCount1)}>-</button>
      </div>
      <h2>Counter 2: </h2>
      <div>
        <h2>{count2}</h2>
        <button onClick={increaseSingleCounter.bind(this,setCount2)}>+</button>
        <button onClick={decreaseSingleCounter.bind(this,setCount2)}>-</button>
      </div>
      <h2>Counter 3: </h2>
      <div>
        <h2>{count3}</h2>
        <button onClick={increaseSingleCounter.bind(this,setCount3)}>+</button>
        <button onClick={decreaseSingleCounter.bind(this,setCount3)}>-</button>
      </div>
      <br />
      <div>
        <button onClick={increaseAllCounters}>increase all</button>
        <button onClick={decreaseAllCounters}>decrease all</button>
      </div>
    </div>
  )
}

export default App
