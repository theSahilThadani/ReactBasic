import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
            
            setData(response.data[currency]);
            // console.log();
        }
        fetchData();
    },[currency])

    // console.log(data);
    return data;
}

export default useCurrencyInfo;