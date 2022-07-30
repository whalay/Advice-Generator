import React, { useCallback, useEffect, useState } from 'react';
import QuoteCard from './components/QuoteCard';


function App() {
  const [quote, setQuote] = useState({});



  const fetchQuoteHandler = useCallback(async () => {
    try{
      const response = await fetch('https://api.adviceslip.com/advice')
     
      const data = await response.json();
      const dataQuote =data.slip;
      
      console.log(dataQuote);

      setQuote(dataQuote);
    }catch{
      throw new Error();
    }

  }, []);

  useEffect(() => {
    fetchQuoteHandler();
  }, [fetchQuoteHandler]);
  
  return (
    <React.Fragment>
    <QuoteCard fetchQuote ={fetchQuoteHandler} quote={quote} />
    
    </React.Fragment>
  );
}

export default App;
