import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
 

  useEffect(() => {

      axios.get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          console.log(res.data);
          setMovieList(res.data);
          console.log(movieList);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Route exact path ='/'>
        {/* <MovieList props = {movieList}/> */}
      </Route>
      <Route path = {`/movies/${movieList.id}`}>
        <Movie />
      </Route>
    </div>
  );
}
