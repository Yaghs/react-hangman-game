
import {languages} from "./languages.js"
import {useState} from "react"

function App() {
  const [currentWord, setCurrentWord] = useState("Hello")

  const currentLetters = currentWord.split("").map((letter, index) =>(<span key={index}>{letter.toUpperCase()}</span>))


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
      <section className="language-section">
        {languagesList}
      </section>
      <section className="word">
        {currentLetters}
      </section>
    </main>
  );
}

export default App;
