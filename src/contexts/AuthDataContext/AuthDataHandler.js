import { createContext, useContext, useMemo, useState } from "react";

const AuthDataContext = createContext(() => {});
export const useAuthDataContext =()=> useContext(AuthDataContext);

const AuthDataHandler = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    // const authUser = 
    const authDataContextPayload = useMemo(()=>{
        isLoggedIn,
        userDetails,
        setIsLoggedIn,
        setUserDetails
    },[isLoggedIn, userDetails])
    return <AuthDataContext.Provider value={authDataContextPayload}/>
}
export default AuthDataHandler;

