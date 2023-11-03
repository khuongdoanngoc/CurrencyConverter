import CountrySelect from "./CountrySelect";


function LeftSideFromInput(props) {

    return ( 
        <div className="form-group">
                <label>Amount of money</label>
                <div className="input-group">
                    <input className="custom-input" />
                    <CountrySelect countries={props.countries} indexOfCountrySelected={131}/>
                </div>
            </div>
     );
}

export default LeftSideFromInput;