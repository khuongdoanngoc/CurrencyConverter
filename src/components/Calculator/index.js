import "./Calculator.css";

import Collector from "./Collector/Collector";
import Conclusion from "./Conclusion";

import useFetchRatesAPI from "../../api/useFetchRatesAPI";
import { useEffect, useState } from "react";

function Calculator() {
    const [ amount, setAmount ] = useState(1);

    return (
        <div className="calculator-container">
            <div className="calculator-content">
                <Collector />
                <Conclusion amount={amount}/>
            </div>
        </div>
    );
}

export default Calculator;
