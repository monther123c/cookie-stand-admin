"use client";
import { createContext, useState} from "react";
import axios from 'axios';
export const AuthContext = createContext();

export default function AuthWrapper({children}){
    const [globalState, setGlobalState] = useState({
        tokens: null,
        login,
    })

    async function login (userInfo) {
        const url = "https://cookies-api-v1.herokuapp.com/api/token/";
        const res = await axios.post(url, userInfo);
        console.log(res.data)
        setGlobalState({
            tokens: res.data,
            login,
        })
    }

    return (
        <AuthContext.Provider value={globalState}>
          {children}
        </AuthContext.Provider>
      );
}