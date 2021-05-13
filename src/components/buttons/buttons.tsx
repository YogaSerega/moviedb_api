/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setSortMovies,
} from '../../redux/actions/actions';
import {
  searchMovie,
  isFetchMovies,
  loading,
  fetchMovies,
  sortMovies,
  setMovies,
  IMovieData,
} from '../../redux/types/types';

function Buttons(): React.ReactElement {
  const dispatch = useDispatch<Dispatch<
  searchMovie
  |isFetchMovies
  |loading
  |fetchMovies
  |sortMovies
  |setMovies>>();
  const defaultState: any = useSelector((state) => state);
  // TODO type default import state ??
  const moviesFromState:Array<IMovieData> = defaultState.stateStore.movies;

  const onClickSortBtn = ():void => {
    dispatch(setSortMovies(
      moviesFromState.sort((a:any, b:any) => a.Year - b.Year),
    ));
  };
  return (
    <div className="buttons">

      <Link
        id="sort"
        className="button"
        type="submit"
        onClick={onClickSortBtn}
        to={{ pathname: '/movieList' }}
      >
        Sort by Year
      </Link>
      <Link
        id="about"
        className="button"
        type="submit"
        to={{ pathname: '/about' }}
      >
        About
      </Link>
      <Link
        id="home"
        className="button"
        type="submit"
        to={{ pathname: '/' }}

      >
        Home
      </Link>
    </div>

  );
}

export default Buttons;
