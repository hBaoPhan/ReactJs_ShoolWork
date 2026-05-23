import { useEffect, useState } from "react"

export const useLocalStorage=(key)=>{
    let [user,setUser]=useState(()=>{
        try {
            let item=localStorage.getItem(key)
            return item? JSON.parse(item): null
        } catch (error) {
            console.log(error.message)
        }
    })

    useEffect(()=>{
        try {
            localStorage.setItem(key,JSON.stringify(user))
        } catch (error) {
             console.log(error.message)
        }
    },[user,setUser])
    return [user,setUser]
}