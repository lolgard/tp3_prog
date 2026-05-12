import { useState, type FormEvent } from "react"
import { useAuthStore } from "../store/authStore"
import { useNavigate } from "react-router-dom"

export function LoginPage(){
    
    const [email, setEmail] = useState("") 
    const [password, setPassword] =useState("")
    const { login , error} = useAuthStore()
    const navigate = useNavigate()
    
    const formSubmit = (e : FormEvent)=>{

        e.preventDefault()
        const result = login({email,password})
        if (result ){
            navigate("/shopping-list") 
        }
            
    }
    return(
        <>
        </>
    )
}