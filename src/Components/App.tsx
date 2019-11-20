import * as React from "react";
import Counter from "./Counter";
import {MouseEventHandler, useState} from "react";

const App: React.FC = () => {

    const [arrayOfCounts, updateCount] = useState([0, 0]);

    const createAddHandler = (index: number) => {
        return (amount: number): MouseEventHandler => {
            return () => {
                let result = [...arrayOfCounts];
                result[index] = result[index] + amount;
                updateCount(result);
            }
        }
    };

    const resetHandler = (index: number) => {
        return () => {
            let result = [...arrayOfCounts];
            result[index] = 0;
            updateCount(result);
        };
    };

    function resetAllCounters() {
        let result = [...arrayOfCounts];
        updateCount(result.map(() => 0));
    }

    function addCounter() {
        let result = [...arrayOfCounts];
        result.push(0);
        updateCount(result);
    }

    function removeHandler(indexToRemove: number) {
        return () => {
            let result = [...arrayOfCounts];
            updateCount(result.filter((value, index) => index !== indexToRemove));
        }
    }

    return (
        <div>
            <button onClick={resetAllCounters}> reset All</button>
            <button onClick={addCounter}> Add new counter</button>
            {arrayOfCounts.map((value, index) => <Counter key={index} count={value}
                                                          createAdderFunction={createAddHandler(index)}
                                                          resetCountToZero={resetHandler(index)}
                                                          removeCounter={removeHandler(index)}/>)}
        </div>
    );

};

export default App;