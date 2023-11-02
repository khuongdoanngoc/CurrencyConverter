import { useEffect, useState } from "react";
import axios from "axios";

import Dropdown from "react-bootstrap/Dropdown";
import countriesCode from "../../../public/CountriesCode";

const flagsAPI =
    "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code";

function CountrySelect() {
    const [countries, setCountries] = useState([]);
    const [countrySelected, setCountrySelected] = useState("");

    useEffect(() => {
        axios
            .get(flagsAPI)
            .then((response) => {
                console.log("fetch api to get flags...");
                const countriesFromFlagsAPI = response.data.countries;
                const labelsFromFlagsAPI = countriesFromFlagsAPI.map(
                    (country) => country.label
                );
                const countriesNameFromFlagsAPI = labelsFromFlagsAPI.map(
                    (label) => label.slice(5)
                );
                const countriesNameFromRatesAPI = Object.values(countriesCode);
                const countriesNameCanConvert =
                    countriesNameFromRatesAPI.filter((countryName) =>
                        countriesNameFromFlagsAPI.includes(countryName)
                    );

                const flagsCurrencies = [];
                countriesNameCanConvert.map((countryName) => {
                    const indexFindedCountryFromFlagsAPI =
                        labelsFromFlagsAPI.findIndex((country) =>
                            country.includes(countryName)
                        );

                    // available to convert
                    if (indexFindedCountryFromFlagsAPI !== -1) {
                        // get label finded
                        let labelFinded =
                            labelsFromFlagsAPI[indexFindedCountryFromFlagsAPI];
                        let countryNameFromLabelFinded = labelFinded
                            .split(" ")
                            .slice(1)
                            .join(" ");

                        // fix special bug from API
                        // 233 is index of United States Minor Outlying Islands
                        if (
                            countryNameFromLabelFinded ===
                            "United States Minor Outlying Islands"
                        ) {
                            countryNameFromLabelFinded = "United States";
                        }
                        if (indexFindedCountryFromFlagsAPI === 233) {
                            labelFinded = labelFinded
                                .split(" ")
                                .splice(0, 3)
                                .join(" ");
                        }
                        // fixed success

                        // get key from countriesCode follow country name
                        const currenciesKey = Object.keys(countriesCode);
                        const currency = currenciesKey.filter(
                            (currency) =>
                                countriesCode[currency] ===
                                countryNameFromLabelFinded
                        );
                        flagsCurrencies.push(
                            labelFinded.replace(
                                countryNameFromLabelFinded,
                                currency
                            )
                        );
                    }
                });
                setCountries(flagsCurrencies);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Dropdown className="national-group">
            <Dropdown.Toggle
                className="national-btn custom-btn"
                variant={null}
                id="dropdown-basic">
                <div className="flag"></div>
                <div className="ensign"></div>
            </Dropdown.Toggle>
            <Dropdown.Menu>

                {
                    countries.map(country => 
                        <Dropdown.Item key={country}>
                            {country}
                        </Dropdown.Item>)
                }

                <Dropdown.Item href="#/action-1">

                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CountrySelect;
