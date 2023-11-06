import "./Collector.css";

import LeftSideFormInput from "./LeftSideFormInput";
import RightSideFormInput from "./RightSideFormInput";
import ReverseIcon from "./ReverseIcon";
import useFetchFlagsAPI from "../../../api/useFetchFlagsAPI";
import { useState } from "react";
import useFetchRatesAPI from "../../../api/useFetchRatesAPI";

function Collector({ handleCollectorChange }) {
    const { countries } = useFetchFlagsAPI();
    const rates = useFetchRatesAPI();

    // amount states
    const [leftAmount, setLeftAmount] = useState(0);
    const [rightAmount, setRightAmount] = useState(0);

    // countrySelected states
    const [leftCountrySelected, setLeftCountrySelected] = useState("USD");
    const [rightCountrySelected, setRightCountrySelected] = useState("VND");

    const handleLeftInputChange = (amountFromInput) => {
        setLeftAmount(amountFromInput);

        if (amountFromInput <= 0) {
            setRightAmount(0);
        } else {
            // convert to right amount
            const convertedAmount = amountFromInput + 5;
            // set right amount converted
            setRightAmount(convertedAmount);
        }
    };

    const handleRightInputChange = (amountFromInput) => {
        setRightAmount(amountFromInput);
        if (amountFromInput <= 0) {
            setLeftAmount(0);
        } else {
            // convert to left amount
            const convertedAmount = amountFromInput + 10;
            // set left amount converted
            setLeftAmount(convertedAmount);
        }
    };

    return (
        <div className="collector">
            <LeftSideFormInput
                countries={countries}
                amount={leftAmount}
                onLeftInputChange={handleLeftInputChange}
            />
            <ReverseIcon />
            <RightSideFormInput
                countries={countries}
                amount={rightAmount}
                onRightInputChange={handleRightInputChange}
            />
        </div>
    );
}

export default Collector;
