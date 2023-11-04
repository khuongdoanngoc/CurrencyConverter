import axios from "axios"
import { useEffect, useState } from "react";

const urlRates = 'https://openexchangerates.org/api/historical/2003-02-20.json?app_id=ada46818cbf9417bb60315b38013e9d6'

function useFetchRatesAPI() {

    const [rates, setRates] = useState({})

    useEffect(() => {
        axios.get(urlRates)
            .then((response) => {
                const data = response.data;
                setRates(data.rates)
            })
            .catch(err => {
                console.log('err fetch rates api: ', err)
            }) 
    }, [])

    return { rates };
}

export default useFetchRatesAPI;