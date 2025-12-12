import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


export default function OrderPage() {
  //State
    const navigate = useNavigate()
    const location = useLocation()   // ← hook à ajouter
    const username = location.state?.username || "Erreur utilisateur"

    //Comportement
    const handleClick = () => {
        navigate("/")
    }
    //console.log("username = " + username);

    //Affichage
  return (
    <div>
        <h1>Bonjour {username}</h1>
        <button onClick={handleClick}>Déconnexion</button>
    </div>
  )
}
