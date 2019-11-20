import * as React from "react";
import Counter from "./Counter";
import {MouseEventHandler, useState} from "react";

const App : React.FC = () => {

    const [currentCount1, updateCount1] = useState(0);
    const [currentCount2, updateCount2] = useState(0);

    const createAdder1 = (amount: number): MouseEventHandler => {
        return () => updateCount1(currentCount1 + amount);
    };
    const createAdder2 = (amount: number) => {
        return () => updateCount2(currentCount2 + amount);
    };

    const resetCountToZero1 = () => {
        updateCount1(0)
    };
    const resetCountToZero2 = () => {
        updateCount2(0)
    };

    function resetAllCounters() {
        updateCount1(0);
        updateCount2(0);
    }

    return (
        <div>
            <button onClick={resetAllCounters}> reset All </button>
            <Counter count={currentCount1} createAdderFunction={createAdder1} resetCountToZero={resetCountToZero1}/>
            <Counter count={currentCount2} createAdderFunction={createAdder2} resetCountToZero={resetCountToZero2}/>
        </div>
    );

};

export default App;