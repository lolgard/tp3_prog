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
            <div>
                {error && (<div style={{color:"red"}}>{error}</div>)}
                <form onSubmit={formSubmit}>

                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="password">contraseña</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    </div>

                    <button type="submit">
                        iniciar sesion
                    </button>

                </form>
            </div>
        </>
    )
}