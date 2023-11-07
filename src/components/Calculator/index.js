import "./Calculator.css";

import Collector from "./Collector/Collector";
import Timer from "./Timer";

import useFetchRatesAPI from "../../api/useFetchRatesAPI";

function Calculator() {
    const resRatesAPI = useFetchRatesAPI();

    return (
        <div className="calculator-container">
            <div className="calculator-content">
                <Collector />
                <Timer date={resRatesAPI.timer}/>
            </div>
        </div>
    );
}

export default Calculator;
