import React, { ChangeEvent, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  searchMovieFromSB,
  fetchAllMovies,
} from '../../redux/actions/actions';
import {
  searchMovie, isFetchMovies, loading, fetchMovies,
} from '../../redux/types/types';

function SearchBar(): React.ReactElement {
  const dispatch = useDispatch<Dispatch<
  searchMovie
  |isFetchMovies
  |loading
  |fetchMovies>>();
  // TODO вынести отдельно диспатч, он используется в нескольких местах
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): string => {
    const searchValue: string = event.target.value;
    dispatch(searchMovieFromSB(searchValue));
    return searchValue;
  };

  const onClickSearch = ():void => {
    dispatch(fetchAllMovies(true));
  };
  return (
    <div className="searchBar">
      <input
        className="inputSearch"
        placeholder="Search..."
        type="text"
        onChange={onChangeHandler}
      />

      <Link
        to={{

          pathname: '/movieList/',

        }}
        type="submit"
        className="button"
        id="search"
        onClick={onClickSearch}
      >
        {' '}

        Search
      </Link>

    </div>
  );
}

export default SearchBar;
