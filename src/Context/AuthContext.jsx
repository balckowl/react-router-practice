import { createContext, useEffect, useState } from "react";
import { auth } from "../../apis/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user] = useAuthState(auth);
    // const [currentUser, setCurrentUser] = useState({});

    // useEffect(() => {
    //     const unsub = onAuthStateChanged(auth, (user) =>{
    //         setCurrentUser(user)
    //         console.log(user)
    //     })

    //     return () => {
    //         unsub()
    //     }
    // },[])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProvider }