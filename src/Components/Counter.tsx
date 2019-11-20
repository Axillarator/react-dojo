import React, {MouseEventHandler} from 'react';

interface Props {
    count:number
    resetCountToZero: MouseEventHandler
    createAdderFunction: (amount:number) => MouseEventHandler
    removeCounter: MouseEventHandler
}

const Counter: React.FC<Props> = (props:Props) => {

    const addOne = props.createAdderFunction(1);
    const addFive = props.createAdderFunction(5);
    const addEight = props.createAdderFunction(8);

    return (
    <div>
      <p>Counter {props.count}</p>
      <button onClick={props.resetCountToZero} >Reset</button>
      <button onClick={addOne} > +1 </button>
      <button onClick={addFive} > +5 </button>
      <button onClick={addEight} > +8 </button>
      <button onClick={props.removeCounter}> delete </button>
    </div>
  );
};

export default Counter;
