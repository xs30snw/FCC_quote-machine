import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import useFetch from './useFetch';

const App = () => {

    const { data, isLoading } = useFetch('https://fcc-quote-machine.herokuapp.com/quotes');
    const [ id, setId ] = useState(0);

    const changeQuote = () => {
        const randomId = Math.floor(Math.random() * 5);
        setId(randomId);
    };

    return (
        <React.Fragment>            

            { isLoading && <QuoteBox text="Loading..." author="Loading..." /> }
            { data && <QuoteBox text={data[id].text} author={data[id].author} handleClick={changeQuote} /> }

        </React.Fragment>
    )
};

export default App;