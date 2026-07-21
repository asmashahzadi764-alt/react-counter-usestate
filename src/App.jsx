import { useState } from 'react';

function Counter({ label }) {
  const [value, setValue] = useState(0);

  const min = 0;
  const max = 5;

  const increment = () => {
    setValue((previousValue) => 
      previousValue < max ? previousValue + 1 : previousValue
    );
  };

  const decrement = () => {
    setValue((previousValue) => 
      previousValue > min ? previousValue - 1 : previousValue
    );
  };

  return (
    <div className="counter">
      <div>{label} Value: <span className="counter__value">{value}</span></div>
      <div className="counter__actions">
        <button className="counter__action" onClick={increment}>Increment</button>
        <button className="counter__action" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Counters</h1>
      <Counter label="Counter 1" />
      <Counter label="Counter 2" />
      <Counter label="Counter 3" />
      <Counter label="Counter 4" />
      <Counter label="Counter 5" />
      <Counter label="Counter 6" />
    </>
  );
}

export default App;