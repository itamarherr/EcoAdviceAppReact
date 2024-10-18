import React from 'react'
import { FCP } from '../services/@types'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'


const NoAuthRoute:FCP = ({children}) => {
    const { isLoggedIn } = useAuth();
    if(isLoggedIn){
        return <Navigate to="/" />;
    }
  return children;

}

export default NoAuthRoute;