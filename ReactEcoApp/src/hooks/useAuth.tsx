import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext){
    throw new Error("useAuth must be used within an authProvaider");
    
  }
  return authContext;
};
export default useAuth;