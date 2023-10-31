import Dropdown from "react-bootstrap/Dropdown";

function RightSideFormInput() {
    return (
        <div className="form-group">
            <label>Amount of money</label>
            <div className="input-group">
                <input className="custom-input" />
                <Dropdown className="national-group">
                    <Dropdown.Toggle
                        className="national-btn custom-btn"
                        variant={null}
                        id="dropdown-basic">
                        <div className="flag"></div>
                        <div className="ensign"></div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            <div className="dropdown-ensign"></div>
                            <span>USA</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default RightSideFormInput;
