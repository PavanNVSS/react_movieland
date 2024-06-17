import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
//78d3d376

const api_url = 'https://www.omdbapi.com?apikey=78d3d376';
const movie1 = {
    "Title": "Batman",
    "Year": "1989",
    "imdbID": "tt0096895",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"
}
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
                <img src={SearchIcon}
                    alt = "Search"
                    onClick={() => {}}
                />
            </div>

            <div className='container'>
                <div className='Movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src= {movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt = {movie1.Title} />}
                    </div>
                    <div>
                        <span> {movie1.Type</span>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default App;