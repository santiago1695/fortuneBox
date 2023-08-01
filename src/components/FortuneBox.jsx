import '../styles/FortuneBox.css'

function FortuneBox({handleChangeQuote, quote}){
  return (
    <section className="fortuneBox">
        <h1>Fortune Cookies</h1>

        <section>
        <p> {quote.phrase}</p>
        
            <button onClick={handleChangeQuote}>
            Try Luck
            </button>
        </section>
        <footer><h4>Fuente: {quote.author} </h4></footer>
    </section>
  )
}
export default FortuneBox