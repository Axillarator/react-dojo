import * as React from "react";
import Counter from "./Counter";
import {MouseEventHandler, useState} from "react";

const App : React.FC = () => {

    const [arrayOfCounts, updateCount] = useState([0,0]);

    const createAdder1 = (amount: number): MouseEventHandler => {
        return () => updateCount([arrayOfCounts[0] + amount, arrayOfCounts[1]]);
    };
    const createAdder2 = (amount: number) => {
        return () => updateCount([arrayOfCounts[0], arrayOfCounts[1] + amount]);
    };

    const resetCountToZero1 = () => {
        updateCount([0, arrayOfCounts[1]])
    };

    const resetCountToZero2 = () => {
        updateCount([arrayOfCounts[0],0])
    };

    function resetAllCounters() {
        updateCount([0,0])
    }

    return (
        <div>
            <button onClick={resetAllCounters}> reset All </button>
            <Counter count={arrayOfCounts[0]} createAdderFunction={createAdder1} resetCountToZero={resetCountToZero1}/>
            <Counter count={arrayOfCounts[1]} createAdderFunction={createAdder2} resetCountToZero={resetCountToZero2}/>
        </div>
    );

};

export default App;