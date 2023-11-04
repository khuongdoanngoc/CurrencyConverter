import "./Calculator.css";

import Collector from "./Collector/Collector";
import Conclusion from "./Conclusion";

import useFetchRatesAPI from "../../api/useFetchRatesAPI";
import { useEffect, useState } from "react";

function Calculator() {
    const { rates } = useFetchRatesAPI();
    const [ amount, setAmount ] = useState(1);
    const [ converted, setConverted ] = useState(1)

    // function convert money
    function Convert() {
        // console.log('amount: ', amount);
        // console.log('converted: ', converted);
    }

    // will convert when amount or converted changed
    useEffect(() => {
        Convert();
    }, [amount, converted]);

    // get amount/converted from collector components
    const handleCollectorChange = (numberOfMoney) => {
        console.log('Calculator.js: numberOfMoney: ', numberOfMoney)
        if (numberOfMoney.side === 'left') {
            setAmount(numberOfMoney.value);
        } else {
            setConverted(numberOfMoney.value)
        }
    }

    return (
        <div className="calculator-container">
            <div className="calculator-content">
                <Collector handleCollectorChange={handleCollectorChange} />
                <Conclusion amount={amount}/>
            </div>
        </div>
    );
}

export default Calculator;
