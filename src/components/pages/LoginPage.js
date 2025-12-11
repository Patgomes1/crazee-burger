import React from 'react'

export default function LoginPage() {
  //State 
    const [username, setUsername] = useState("")

    //Comportement
    const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      setUsername(form.username.value)
      alert(`Bienvenue ${form.username.value} !`)
      form.reset()
    }

    //Affichage
    return (
      <div>
        <h1>Bienvenue chez nous !</h1>
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder='Entrez votre prenom' required />
          <button type="submit">Accéder à votre espace</button>
        </form>
      </div>
    )
}
