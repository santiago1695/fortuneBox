import { useState } from 'react'
import quotes from './db/db.json'
import './App.css'
import { getRandom } from './utils/random.js'
import FamousPhrases from './components/FamousPhrases.jsx'

const listFortune = ["fortune1", "fortune2", "fortune3", "fortune4"]

function App() {
  const [quote, setQuote] = useState(getRandom(quotes));
  const [currentFortune, setCurrentFortune] = useState(getRandom(listFortune));
  const handleChangeQuote = () => {
    setQuote(getRandom(quotes));
    setCurrentFortune(getRandom(listFortune));
  }

  return (
    <main className={`App ${currentFortune}`}>
      <FamousPhrases handleChangeQuote={handleChangeQuote} quote={quote}/>
    </main>
  )
}

export default App
