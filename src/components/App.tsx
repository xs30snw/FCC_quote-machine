import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';

function App() {

    const [quotes, setQuotes] = useState(null);

    useEffect( () => {
        fetch('http://127.0.0.1:3000/quotes')
            .then( res  => res.json() )
            .then( data => setQuotes(data) )            
    }, []);

    return (
        <div>
            { quotes && <QuoteBox quotes={quotes} />}
        </div>
    )
}

export default App;