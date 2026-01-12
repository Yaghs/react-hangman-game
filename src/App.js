
import {languages} from "./languages.js"
function App() {

  const languagesList = languages.map((language, index)=>{
    return(
      <span key={index} className="language-badge"
       style={{backgroundColor: language.backgroundColor, color: language.color}}>{language.name}
       </span>
    )
  })

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the program world safe from assembly!</p>
      </header>
      <section className="game-status">
        <h2>You Win!</h2>
        <p>Well done!</p>
      </section>
<<<<<<< HEAD
      <section className="language-section">
        {languagesList}
      </section>
      
=======
>>>>>>> 9497ae1f0148d951ca6622e64c257b96d08564d5
    </main>
  );
}

export default App;
