import React from 'react'
import { useState } from 'react'


export default function LoginForm() {

    //State 
    const [username, setUsername] = useState("")

    //Comportement
    const handleSubmit = (event) => {
      event.preventDefault()
      alert(`Bienvenue ${username} !`)
      setUsername("")
    }
    
    const handleChange = (event) => {
      setUsername(event.target.value)
    }
  return (
    <form action="submit" onSubmit={handleSubmit}>
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez-vous</h2>
          <input value={username} type="text" name="username" placeholder='Entrez votre prenom' onChange={handleChange} required />
          <button type="submit">Accéder à votre espace</button>
        </form>
  )
}
