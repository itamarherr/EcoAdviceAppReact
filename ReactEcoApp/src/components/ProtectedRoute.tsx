import { FC,ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FCP } from "../services/@types";

// type ProtectedRouteType = {
//   children: ReactNode;
// };

const ProtectedRoute: FCP = ({children}) => {
    const {isLoggedIn} = useAuth();
    if(!isLoggedIn){
        return <Navigate to= "/login"/>;
    }
 
  return children;
}

export default ProtectedRoute;