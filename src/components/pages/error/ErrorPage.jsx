import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    //State
    const navigate = useNavigate()

    //Comportement
    const handleClick = () => {
        navigate("/")
    }

    //Affichage
  return (
    <div>
        <h2>ErrorPage</h2>
        <button onClick={handleClick}>Retourner à la page accueil</button>
    </div>
  )
}
