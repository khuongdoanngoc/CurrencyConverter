import { useEffect, useState } from "react";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function Timer({ date }) {
    const [strDate, setStrDate] = useState("");

    useEffect(() => {
        setStrDate(`${months[parseInt(date.month)-1]} ${date.day}, ${date.year}`)
    }, [date])

    return (
        <div className="conclusion">
            <h3>Mid-market exchange rate at {strDate}</h3>
        </div>
    );
}

export default Timer;
