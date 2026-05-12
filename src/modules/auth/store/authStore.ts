import { create } from "zustand";
import type { Credentials, User } from "../types";

interface IAuthStore {
    user : User | null,
    isAuthenticated : boolean,
    error: string | null

    login : (credentials: Credentials) => boolean,
    logout : () => void
    
}
export const useAuthStore = create<IAuthStore> ((set)=>({
    user: null,
    isAuthenticated: false,
    error: null,
 
    login: (credentials)=>{
        if (credentials.email === "pepe@gmail.com" && credentials.password === "pepePassword23"){
            set({
                user: {email: credentials.email},
                isAuthenticated: true,
                error: null
            })
            return true
        }
        set({error: "credenciales incorrectas"})
            return false
    },
    logout : ()=>{
        set({
             user: null,
             isAuthenticated: false,
             error: null,
        })
    }
    
}))
