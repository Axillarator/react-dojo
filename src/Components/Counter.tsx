import React, {useState} from 'react';

const Counter: React.FC = () => {

  const [currentCount, updateCount] = useState(0);

  const resetCountToZero = () => {
    updateCount(0)
  };

  const addToCount = (amount: number) => {
    return () => updateCount(currentCount + amount);
  };

  return (
    <div>
      <p>Counter {currentCount}</p>
      <button onClick={resetCountToZero} >Reset</button>
      <button onClick={addToCount(1)} > +1 </button>
      <button onClick={addToCount(5)} > +5 </button>
      <button onClick={addToCount(8)} > +8 </button>
    </div>
  );
};

export default Counter;
