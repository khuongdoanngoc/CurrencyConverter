import CountrySelect from "./CountrySelect";

function RightSideFormInput(props) {

    return (
        <div className="form-group">
            <label>Converted to</label>
            <div className="input-group">
                <input className="custom-input" type="number" />
                <CountrySelect countries={props.countries} indexOfCountrySelected={131}/>
            </div>
        </div>
    );
}

export default RightSideFormInput;
