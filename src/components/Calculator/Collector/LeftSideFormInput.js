import { useState } from "react";
import CountrySelect from "./CountrySelect";


function LeftSideFromInput({ countries, handleChange}) {
    const [leftAmount, setLeftAmount] = useState({ side: 'left', value: 1})

    const handleInputChange = (event) => {
        const floatValue = parseFloat(event.target.value)
        setLeftAmount({ side: 'left', value: floatValue})
        handleChange(leftAmount)
    }

    return ( 
        <div className="form-group">
                <label>Amount</label>
                <div className="input-group">
                    <input className="custom-input" type="number" value={leftAmount.value} onChange={handleInputChange} />
                    <CountrySelect countries={countries} indexOfCountrySelected={128}/>
                </div>
            </div>
     );
}

export default LeftSideFromInput;