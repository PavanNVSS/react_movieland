import React from 'react';
import { useEffect, useState }  from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
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

    const[movies, Setmovies] = useState([]);

    const search_movies = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        Setmovies(data.Search);
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
            {
                movies?.length > 0
                    ?
                    (
                        <div className='container'>
                        <MovieCard movie1={movies[0]} />
                    </div>
                    ) :
                    (
                        <div className='empty'>
                            <h2>no movies found</h2>

                    )
            }

        </div>
    );
}

export default App;