import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  // state données
  const [username, setUsername] = useState('')

  // Comportement
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const inputUsername = form.username.value
    setUsername(inputUsername)
    alert(`Bienvenue ${inputUsername} !`)
    form.reset()
  }


  // affichage
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <label>
          <input type="text" name="username" placeholder='Entrez votre prenom' required />
        </label>
        <button type="submit">Accéder à votre espace</button>
      </form>
    </div>
  )
}

export default App
