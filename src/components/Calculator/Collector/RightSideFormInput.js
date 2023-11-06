import { useState } from "react";
import CountrySelect from "./CountrySelect";

function RightSideFormInput({ countries, amount, onRightInputChange }) {

    const handleChange = (event) => {
        const floatValue = parseFloat(event.target.value)
        onRightInputChange(floatValue);
    }

    return (
        <div className="form-group">
            <label>Converted to</label>
            <div className="input-group">
                <input className="custom-input" type="number" value={amount} onChange={handleChange} />
                <CountrySelect countries={countries} indexOfCountrySelected={131}/>
            </div>
        </div>
    );
}

export default RightSideFormInput;
