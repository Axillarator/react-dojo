import React, {MouseEventHandler} from 'react';

interface Props {
    count: number
    resetCountToZero: MouseEventHandler
    createAdderFunction: (amount: number) => MouseEventHandler
    removeCounter: MouseEventHandler
    sign: number
    swapSign: MouseEventHandler
}

const Counter: React.FC<Props> = (props: Props) => {

    const addOne = props.createAdderFunction(props.sign);
    const addFive = props.createAdderFunction(5 * props.sign);
    const addEight = props.createAdderFunction(8 * props.sign);

    return (
        <div>
            <p>Counter {props.count}</p>
            <button onClick={props.resetCountToZero}>Reset</button>
            <button onClick={addOne}> adding {props.sign}</button>
            <button onClick={addFive}> adding {props.sign * 5}</button>
            <button onClick={addEight}> adding {props.sign * 8}</button>
            <button onClick={props.swapSign}> +/-</button>
            <button onClick={props.removeCounter}> delete</button>
        </div>
    );
};

export default Counter;
