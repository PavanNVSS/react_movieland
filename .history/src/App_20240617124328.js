import React from 'react';
import { useEffect, useState } from 'react';
//78d3d376

const api_url = 'https://www.omdbapi.com?apikey=78d3d376';
const App = () => {

    const search_movies = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        search_movies("big hero 6");

    }, []);
    return (
        <h1> test</h1>
    );
}

export default App;