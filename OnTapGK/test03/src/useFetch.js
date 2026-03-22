import { useEffect, useState } from 'react'
import axios from 'axios'

export let useFetch = (inputData) => {
    let [data, setData] = useState([])
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        let fetch = async () => {
            try {
                // let res = await axios.get(inputData)
                // let dataFetch = await res.json()
                setData(inputData)

                setTimeout(() => {
                    setLoading(false)
                }, 2000)

            } catch (error) {
                setError(error.message)
            }
        }
        fetch()

    }, [inputData])

    return { data, error, loading }



}
