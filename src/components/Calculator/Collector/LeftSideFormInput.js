import { memo } from "react";
import CountrySelect from "./CountrySelect";

function LeftSideFormInput({ countries, amount, onLeftInputChange, onLeftCountryChange }) {

    const handleChange = (event) => {
        const floatValue = parseFloat(event.target.value);
        if (floatValue > 0) {
            onLeftInputChange(floatValue);
        } else {
            onLeftInputChange(0)
        }
    };

    const handleCountryChange = (country) => {
        // remove flag
        const newCountry = country.split(' ')[1];
        onLeftCountryChange(newCountry)
    }

    return (
        <div className="form-group">
            <label>Amount</label>
            <div className="input-group">
                <input
                    className="custom-input"
                    value={amount}
                    onChange={handleChange}
                />
                <CountrySelect
                    countries={countries}
                    indexOfCountrySelected={128}
                    onCountryChange={handleCountryChange}
                />
            </div>
        </div>
    );
}

export default memo(LeftSideFormInput);
