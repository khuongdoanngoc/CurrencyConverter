import './Collector.css'

import LeftSideFormInput from "./LeftSideFormInput";
import RightSideFormInput from "./RightSideFormInput";
import ReverseIcon from "./ReverseIcon";

function Collector() {
    return (
        <div className="collector">
            <LeftSideFormInput/>
            <ReverseIcon/>
            <RightSideFormInput/>
        </div>
    );
}

export default Collector;
