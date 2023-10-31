import './Calculator.css'


import Collector from "./Collector/Collector";
import Conclusion from "./Conclusion";

function Calculator() {
    return (
        <div className="calculator-container">
            <div className="calculator-content">
                <Collector/>
                <Conclusion/>
            </div>
        </div>
    );
}


export default Calculator;