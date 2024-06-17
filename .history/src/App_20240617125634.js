import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Searchicon from './search.svg';
//78d3d376

const api_url = 'https://www.omdbapi.com?apikey=78d3d376';
const App = () => {

    const search_movies = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        search_movies('batman');

    }, []);
    return (
        <div className='app'>
            
            <h1> MovieLand</h1>
            <div className='Search'>
                <input
                    placeholder="Enter to Search For Movies"
                    value='Superman'
                    onChange={() => { }}
                    
                />
                <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
        </div>
    );
}

export default App;