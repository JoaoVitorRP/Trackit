import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserDataContext = createContext({});

export default function UserDataProvider({children}){
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    function signIn(apiResponse){
        setUserData(apiResponse);
        navigate("/habitos");
    }

    return(
        <UserDataContext.Provider value={{signIn, userData}}>
            {children}
        </UserDataContext.Provider>
    )
}