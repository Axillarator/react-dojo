import * as React from "react";
import Counter from "./Counter";
import {MouseEventHandler, useState} from "react";

const App : React.FC = () => {

    const [arrayOfCounts, updateCount] = useState([0,0]);

    const createAdder = (index: number) => {
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
        updateCount([0,0])
    }

    return (
        <div>
            <button onClick={resetAllCounters}> reset All </button>
            <Counter count={arrayOfCounts[0]} createAdderFunction={createAdder(0)} resetCountToZero={resetHandler(0)}/>
            <Counter count={arrayOfCounts[1]} createAdderFunction={createAdder(1)} resetCountToZero={resetHandler(1)}/>
        </div>
    );

};

export default App;