import Dropdown from "react-bootstrap/Dropdown";
import CountrySelect from "./CountrySelect";

function RightSideFormInput() {
    return (
        <div className="form-group">
            <label>Amount of money</label>
            <div className="input-group">
                <input className="custom-input" />
                <CountrySelect/>
            </div>
        </div>
    );
}

export default RightSideFormInput;
