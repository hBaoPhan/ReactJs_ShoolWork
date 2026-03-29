import { useEffect } from "react"
import { useState } from "react"

export let useFetch = (inputData) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)

    useEffect(() => {
        let fetch = () => {
            try {
                setData(inputData)

                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            } catch (error) {
                setError(error.message)
            }
        }
        fetch()
    }, [])
    console.log(data)

    return { data, loading, error }

}