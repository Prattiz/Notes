import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }){
    const [data, setData]= useState({})

    async function signIn({ email, password }){
        
        try{
            const response = await api.post("sessions", { email, password });
            const { token, user } = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)
            
            
            
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({ token, user });
        } catch(error){
            
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível entrar")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`

            setData({
                user: JSON.parse(user),
                token
            })
        }

    }, []); 


    return(
        <AuthContext.Provider 
        value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context
}
