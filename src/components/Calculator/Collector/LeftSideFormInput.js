import CountrySelect from "./CountrySelect";


function LeftSideFromInput(props) {

    return ( 
        <div className="form-group">
                <label>Amount</label>
                <div className="input-group">
                    <input className="custom-input" type="number" />
                    <CountrySelect countries={props.countries} indexOfCountrySelected={128}/>
                </div>
            </div>
     );
}

export default LeftSideFromInput;