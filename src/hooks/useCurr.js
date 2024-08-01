import { useEffect, useState } from 'react';

const DATE = "latest";
const API_VERSION = "v1";
const BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${DATE}/${API_VERSION}`;

function useCurr(curr) {
    const [val, setVal] = useState({});
    const url = `${BASE_URL}/currencies/${curr}.json`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setVal(data[curr] || {}));
    }, [curr, url]);

    return val;
}

export default useCurr;
