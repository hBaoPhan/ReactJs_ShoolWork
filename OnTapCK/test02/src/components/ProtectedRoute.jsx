import React from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../store/atom'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    let [user,setUser]=useRecoilState(userState)
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
  return (
   children
  )
}

export default ProtectedRoute
