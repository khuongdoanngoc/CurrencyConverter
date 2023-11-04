import { useState } from "react";
import CountrySelect from "./CountrySelect";

function RightSideFormInput({ countries, handleChange}) {
    const [rightAmount, setRightAmount] = useState({ side: 'right', value: 1})

    const handleInputChange = (event) => {
        const floatValue = parseFloat(event.target.value)
        setRightAmount({ side: 'right', value: floatValue})
        handleChange(rightAmount)
    }

    return (
        <div className="form-group">
            <label>Converted to</label>
            <div className="input-group">
                <input className="custom-input" type="number" value={rightAmount.value} onChange={handleInputChange} />
                <CountrySelect countries={countries} indexOfCountrySelected={131}/>
            </div>
        </div>
    );
}

export default RightSideFormInput;
