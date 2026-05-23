import { useEffect, useState } from "react"


export const useLocalStorage = (key, initialValue) => {
    let [user, setUser] = useState(() => {
        try {
            let item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error.message)
            return initialValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(user))
        } catch (error) {
            console.log("không lưu xuống LS được")
        }

    }, [user, setUser])
    return [user, setUser]
}