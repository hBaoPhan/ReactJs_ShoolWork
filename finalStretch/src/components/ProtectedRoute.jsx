import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../store/atoms'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    let user = useRecoilValue(userState)

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return children
}

export default ProtectedRoute