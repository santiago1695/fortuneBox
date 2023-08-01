import '../styles/FamousPhrases.css'

function FortuneBox({handleChangeQuote, quote}){
  return (
    <section className="phrases_box">
        <h1>Famous Phrases</h1>

        <section>
        <p> {quote.phrase}</p>
        
            <button onClick={handleChangeQuote}>
            Try Phrase
            </button>
        </section>
        <footer><h4>Fuente: {quote.author} </h4></footer>
    </section>
  )
}
export default FortuneBox