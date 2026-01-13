
import {languages} from "./languages.js"
import {useState} from "react"
import {clsx} from "clsx"

function App() {
  const [secretWord, setSecretWord] = useState("hello")
  const [guessedLetters, setguessedLetters] = useState([])
  console.log(guessedLetters)



  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuestLetterHandler(letter){
    setguessedLetters(prevLetter => 
      [...prevLetter, letter]
    )
   if(secretWord.includes(letter)){
    console.log("correct")
   }
   else{
    console.log("incorrect")
   }
   console.log(guessedLetters)
   console.log(letter)
  }
  //TODO: the letters are all orange, the background colors should only change IF the user has clicked on it
  // if the letter is correct, then set the background color to green if not, then set it to red 

  const currentLetters = secretWord.split("").map((letter, index) =>(<span key={index}>{letter.toUpperCase()}</span>))

  const keyBoard = alphabet.split("").map((letter, index) => {
    /**
     * check if the selected letter is included inside the guessedletters AND secretWord
     * 
     * if the previous condition is true, change the backgroundColor of the button to be green
     * 
     * if the selected letter is included inside the guessedletters but not in secretWord, change the backgroundColor to red 
     * 
     * if its not in guessed letter and not in secretWord then keep the backgroundColor in its default state
     */
    const isInSecretWord = secretWord.includes(letter) 
    const isInGuessedLetters = guessedLetters.includes(letter)
    let isCorrect = false
    let isWrong = false
    if(isInSecretWord && isInGuessedLetters){
      isCorrect = true
    }
    else if(!isInSecretWord && isInGuessedLetters){
      isWrong = true
    }
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    })
    return (<button className={className}
                    key={index} 
                    onClick = {() => {addGuestLetterHandler(letter)}} >
                      {letter.toUpperCase()}
            </button>)
  })
    
    
   

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
      <section className="keyboard">
        {keyBoard}
      </section>
    </main>
  );
}

export default App;
