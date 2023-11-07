import CountrySelect from "./CountrySelect";

function RightSideFormInput({
    countries,
    amount,
    onRightInputChange,
    onRightCountryChange,
}) {
    const handleChange = (event) => {
        const floatValue = parseFloat(event.target.value);
        if (floatValue > 0) {
            onRightInputChange(floatValue);
        } else {
            onRightInputChange(0);
        }
    };

    const handleCountryChange = (country) => {
        // remove flag
        const newCountry = country.split(' ')[1];
        onRightCountryChange(newCountry)
    };

    return (
        <div className="form-group">
            <label>Converted to</label>
            <div className="input-group">
                <input
                    className="custom-input"
                    value={amount}
                    onChange={handleChange}
                />
                <CountrySelect
                    countries={countries}
                    indexOfCountrySelected={131}
                    onCountryChange={handleCountryChange}
                />
            </div>
        </div>
    );
}

export default RightSideFormInput;
