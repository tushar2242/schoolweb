
import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";

export function GetData(url, endPoint) {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        AOS.init({ duration: 1200 });
        axios.get(`${url}${endPoint}`)
            .then(res => {
                setData(res.data.data)
                console.log(res.data)
            })
            .catch(res => {
                setError(res.data)
                console.log(res.data)
            })
    }, [url, endPoint])

    return { data, error }
}


//working on free time with customization every page to imporve the optimization of website
//go and get the <data></data>