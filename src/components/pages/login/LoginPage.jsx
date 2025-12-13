import { useState } from 'react'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

    //State
    const navigate = useNavigate()

    //Comportement

    //Affichage
    return (
        <LoginForm 
            onSuccess = {(username) =>{
                navigate("/order", {state: { username }})
            }} />
    )
}
