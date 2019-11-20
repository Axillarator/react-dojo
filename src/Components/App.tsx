import * as React from "react";
import Counter from "./Counter";
import {MouseEventHandler, useState} from "react";

interface CounterState {
    countValue: number,
    sign: number
}

const App: React.FC = () => {

    const [arrayOfCounts, updateCount] = useState<CounterState[]>([{countValue:0,sign:1}, {countValue:0,sign:1}]);

    const createAddHandler = (index: number) => {
        return (amount: number): MouseEventHandler => {
            return () => {
                let result = [...arrayOfCounts];
                result[index].countValue = result[index].countValue + amount;
                updateCount(result);
            }
        }
    };

    const resetHandler = (index: number) => {
        return () => {
            let result = [...arrayOfCounts];
            result[index].countValue = 0;
            updateCount(result);
        };
    };

    function resetAll() {
        let result = [...arrayOfCounts];
        updateCount(result.map(() => {return{countValue:0, sign:1}}));
    }

    function addCounter() {
        let result = [...arrayOfCounts];
        result.push({countValue:0, sign:1});
        updateCount(result);
    }

    function removeHandler(indexToRemove: number) {
        return () => {
            let result = [...arrayOfCounts];
            updateCount(result.filter((value, index) => index !== indexToRemove));
        }
    }

    function swapHandler(index: number) {
        return () => {
            let result = [...arrayOfCounts];
            result[index].sign = result[index].sign * (-1);
            updateCount(result);
        };
    }

    return (
        <div>
            <button onClick={resetAll}> reset All</button>
            <button onClick={addCounter}> Add new counter</button>
            {arrayOfCounts.map((element, index) => <Counter key={index} count={element.countValue}
                                                          createAdderFunction={createAddHandler(index)}
                                                          resetCountToZero={resetHandler(index)}
                                                          removeCounter={removeHandler(index)}
                                                          sign={element.sign}
                                                          swapSign={swapHandler(index)}/>)}
        </div>
    );

};

export default App;