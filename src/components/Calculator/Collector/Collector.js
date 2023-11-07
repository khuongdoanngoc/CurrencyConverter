import "./Collector.css";

import LeftSideFormInput from "./LeftSideFormInput";
import RightSideFormInput from "./RightSideFormInput";
import ReverseIcon from "./ReverseIcon";
import useFetchFlagsAPI from "../../../api/useFetchFlagsAPI";
import { useState } from "react";
import useFetchRatesAPI from "../../../api/useFetchRatesAPI";

function Collector({ handleCollectorChange }) {
    const { countries } = useFetchFlagsAPI();
    const resRatesAPI = useFetchRatesAPI();

    // amount states
    const [leftAmount, setLeftAmount] = useState(0);
    const [rightAmount, setRightAmount] = useState(0);

    // countrySelected states
    const [leftCountrySelected, setLeftCountrySelected] = useState("USD");
    const [rightCountrySelected, setRightCountrySelected] = useState("VND");

    // handle inputs change
    const handleLeftInputChange = (amountFromInput) => {
        setLeftAmount(amountFromInput);

        // convert to right amount
        const amountConverted = convert(
            amountFromInput,
            leftCountrySelected,
            rightCountrySelected
        );

        // set right amount converted
        setRightAmount(amountConverted);
    };

    const handleRightInputChange = (amountFromInput) => {
        setRightAmount(amountFromInput);

        // convert to left amount
        const amountConverted = convert(
            amountFromInput,
            rightCountrySelected,
            leftCountrySelected
        );

        // set left amount converted
        setLeftAmount(amountConverted);
    };
    // <------>

    // handle countries change
    const handleLeftCountryChange = (countryLeftSide) => {
        setLeftCountrySelected(countryLeftSide);
        const amountConverted = convert(
            leftAmount,
            countryLeftSide,
            rightCountrySelected
        );
        setRightAmount(amountConverted);
    };

    const handleRightCountryChange = (countryRightSide) => {
        setRightCountrySelected(countryRightSide);
        const amountConverted = convert(
            rightAmount,
            countryRightSide,
            leftCountrySelected
        );
        setLeftAmount(amountConverted);
    };

    // convert function
    const convert = (amount, countryFrom, countryTo) => {
        const rateCountryFrom = resRatesAPI.rates[countryFrom];
        const rateCountryTo = resRatesAPI.rates[countryTo];
        const amountConverted = (amount / rateCountryFrom) * rateCountryTo;
        return amountConverted.toFixed(0);
    };

    return (
        <div className="collector">
            <LeftSideFormInput
                countries={countries}
                amount={leftAmount}
                onLeftInputChange={handleLeftInputChange}
                onLeftCountryChange={handleLeftCountryChange}
            />
            <ReverseIcon />
            <RightSideFormInput
                countries={countries}
                amount={rightAmount}
                onRightInputChange={handleRightInputChange}
                onRightCountryChange={handleRightCountryChange}
            />
        </div>
    );
}

export default Collector;
