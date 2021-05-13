import {
  loading,
  UserActionTypes,
  searchMovie,
  fetchMovies,
  setMovies,
  isFetchMovies,
  IMovieData,
  sortMovies,
  fetchMovieDetail,
  fetchID,
} from '../types/types';

export const searchMovieFromSB = (payload:string)
:searchMovie => ({
  type: UserActionTypes.SEARCH_MOVIE,
  payload,
});
export const changeIsLoading = (payload:boolean)
:loading => ({
  type: UserActionTypes.LOADING,
  payload,
});
export const isFetchData = (payload:boolean)
:isFetchMovies => ({
  type: UserActionTypes.IS_FETCH_MOVIES,
  payload,
});

export const fetchAllMovies = (payload:boolean)
:fetchMovies => ({
  type: UserActionTypes.FETCH_MOVIES,
  payload,
});

export const setFetchedMovies = (payload:Array<IMovieData>)
:setMovies => ({
  type: UserActionTypes.SET_MOVIES,
  payload,
});
export const setSortMovies = (payload:Array<IMovieData>)
:sortMovies => ({
  type: UserActionTypes.SORT_MOVIES,
  payload,
});
export const fetchDetailMovie = (payload:IMovieData)
:fetchMovieDetail => ({
  type: UserActionTypes.FETCH_MOVIE,
  payload,
});
export const fetchMovieID = (payload:string)
:fetchID => ({
  type: UserActionTypes.FETCH_ID,
  payload,
});
