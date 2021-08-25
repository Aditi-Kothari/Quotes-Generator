import React,{useState,useEffect} from 'react';
import Loading from './Loading.js';


const Quote = () =>{
  const [quote, setquote] = useState("");
  const [author, setauthor] = useState("");
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    getQuotes()
  },[])

  const getQuotes = () =>{
    setLoading(false);
    let url="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let dataQuote = data.quotes;
      let ranNum = Math.floor(Math.random()*dataQuote.length);
      let randomQuote=dataQuote[ranNum];
      setquote( randomQuote.quote);
      setauthor( randomQuote.author);
    }).catch(err =>{
      console.log(err);
    })

    
  }

const generateQuote = () =>{
  getQuotes();
}

if(loading){
  return <Loading />
}

    return (

      <div id="quote-box">
        <div id="text">
          <p>{quote}</p>
        </div>
        <div id="author">
          <p>{author}</p>
        </div>
        <div>
          <button id="new" onClick={generateQuote}>New Quote</button>
        </div>
      </div>
    )
}

export default Quote;