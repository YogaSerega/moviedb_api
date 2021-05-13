/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { IMovieData, TypeOfDefaultState } from '../../redux/types/types';
import MovieCard from '../MovieCard/MovieCard';
import EmptyList from '../EmptyList/EmptyList';

function MovieList(): React.ReactElement {
  const defaultState = useSelector(
    (state:TypeOfDefaultState) => state,
  );// TODO указать тип для стор
  // movie.stateStore
  let content;
  if (defaultState.stateStore!.movies === undefined) {
    return (<EmptyList />);
  }
  content = defaultState.stateStore!.movies.length > 0
    ? defaultState.stateStore!
      .movies.map((moviecard:IMovieData, index:number) => (

        <div className="movieCard" key={index}>
          <MovieCard movie={moviecard} />
        </div>

      ))
    : null;
  return (
    <div className="container">
      {content}
    </div>
  );
}

export default MovieList;
