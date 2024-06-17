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
                <img src='Searchicon'>
                    alt = 'Search'
                </img>
            </div>
        </div>
    );
}

export default App;