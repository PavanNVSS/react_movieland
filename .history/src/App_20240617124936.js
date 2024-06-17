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
        <div className='app'
        <h1> test</h1>
    );
}

export default App;