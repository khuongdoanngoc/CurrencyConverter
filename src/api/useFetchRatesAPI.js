import axios from "axios";
import { useEffect, useState } from "react";

const timer = {
    day: String(new Date().getDate() - 1).padStart(2, "0"),
    month: String(new Date().getMonth() + 1).padStart(2, "0"),
    year: String(new Date().getFullYear())
}

const urlRates =
    `https://openexchangerates.org/api/historical/${timer.year}-${timer.month}-${timer.day}.json?app_id=ada46818cbf9417bb60315b38013e9d6`;

function useFetchRatesAPI() {
    const [rates, setRates] = useState({});

    useEffect(() => {
        axios
            .get(urlRates)
            .then((response) => {
                const data = response.data;
                setRates(data.rates);
            })
            .catch((err) => {
                console.log("err fetch rates api: ", err);
            });
    }, []);

    return { rates, timer };
}

export default useFetchRatesAPI;
