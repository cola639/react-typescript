import React from 'react'
import {useAppSelector} from '@/hooks/reduxHooks'
import {Navigate} from 'react-router-dom'

const RequireAuth: React.FC = ({children}) => {
    const token = useAppSelector(state => state.auth.token)

    return token ? <>{children}</> : <Navigate to="/auth/login" replace />
}

export default RequireAuth
