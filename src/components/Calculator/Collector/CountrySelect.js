import { useEffect, useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";

function CountrySelect({ countries, indexOfCountrySelected, onCountryChange }) {
    const [countrySelected, setCountrySelected] = useState("");

    useEffect(() => {
        if (countries.length !== 0) {
            setCountrySelected(countries[indexOfCountrySelected]);
        }
    }, [countries, indexOfCountrySelected]);

    const handleLabelChange = (country) => {
        setCountrySelected(country);
        onCountryChange(country)
    };

    return (
        <Dropdown className="national-group">
            <Dropdown.Toggle
                className="national-btn custom-btn"
                variant={null}
                id="dropdown-basic">
                <div className="label-selected">{countrySelected}</div>
            </Dropdown.Toggle>
            <Dropdown.Menu
                style={{
                    maxHeight: "200px",
                    overflowY: "auto",
                    position: "absolute",
                    width: "10px",
                }}>
                {countries.map((country) => (
                    <Dropdown.Item
                        key={country}
                        onClick={() => handleLabelChange(country)}
                        style={{ fontFamily: "monospace", fontSize: "15px" }}>
                        {country}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CountrySelect;
