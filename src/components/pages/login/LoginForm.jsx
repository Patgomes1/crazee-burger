import React from 'react'
import { useState } from 'react'


export default function LoginForm({onSuccess}) {

    //State 
    const [username, setUsername] = useState("")

    //Comportement
    const handleSubmit = (event) => {
      event.preventDefault()
      //setUsername("")
      onSuccess(username)
    }
    
    const handleChange = (event) => {
      setUsername(event.target.value)
    }

    //Affichage
  return (
    <form onSubmit={handleSubmit}>
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez-vous</h2>
          <input value={username} type="text" name="username" placeholder='Entrez votre prenom' onChange={handleChange} required />
          <button type="submit">Accéder à votre espace</button>
    </form>
  )
}
