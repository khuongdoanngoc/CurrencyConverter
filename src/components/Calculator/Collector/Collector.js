import "./Collector.css";

import LeftSideFormInput from "./LeftSideFormInput";
import RightSideFormInput from "./RightSideFormInput";
import ReverseIcon from "./ReverseIcon";
import useFetchFlagsAPI from "../../../api/useFetchFlagsAPI";
import { useState } from "react";

function Collector({ handleCollectorChange }) {
    const { countries } = useFetchFlagsAPI();
    const [ amount, setAmount ] = useState({});

    const handleChange = (amountFromInput) => {
        console.log('Collector.js: dataFromInput: ', amountFromInput)
        setAmount(amountFromInput)
        handleCollectorChange(amount)
    }

    return (
        <div className="collector">
            <LeftSideFormInput countries={countries} handleChange={handleChange}/>
            <ReverseIcon />
            <RightSideFormInput countries={countries} handleChange={handleChange} />
        </div>
    );
}

export default Collector;
