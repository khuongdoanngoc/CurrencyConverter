import { useState } from "react";
import CountrySelect from "./CountrySelect";

function LeftSideFormInput({ countries, amount, onLeftInputChange }) {
    const handleChange = (event) => {
        const floatValue = parseFloat(event.target.value);
        if (floatValue > 0) {
            onLeftInputChange(floatValue);
        } else {
            onLeftInputChange(0)
        }
    };

    return (
        <div className="form-group">
            <label>Amount</label>
            <div className="input-group">
                <input
                    className="custom-input"
                    type="type"
                    value={amount}
                    onChange={handleChange}
                />
                <CountrySelect
                    countries={countries}
                    indexOfCountrySelected={128}
                />
            </div>
        </div>
    );
}

export default LeftSideFormInput;
