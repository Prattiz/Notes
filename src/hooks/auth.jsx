import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }){
    const {data, setData}= useState({})

    async function signIn({ email, password }){
        
        try{
            const response = await api.post("/sessions", {email, password});
            const {user, token} = response.data;
            
            api.defaults.headers.authorization = `Bearer ${token}`
            setData({ })
        } catch(error){
            
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível entrar")
            }
        }
    }
    return(
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context
}
