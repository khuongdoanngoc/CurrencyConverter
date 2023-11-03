import "./Collector.css";

import LeftSideFormInput from "./LeftSideFormInput";
import RightSideFormInput from "./RightSideFormInput";
import ReverseIcon from "./ReverseIcon";
import FetchFlagsAPI from "../../../api/FetchFlagsAPI";

function Collector() {
    const { countries } = FetchFlagsAPI();

    return (
        <div className="collector">
            <LeftSideFormInput countries={countries} />
            <ReverseIcon />
            <RightSideFormInput countries={countries} />
        </div>
    );
}

export default Collector;
