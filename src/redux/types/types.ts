/* eslint-disable @typescript-eslint/no-explicit-any */
import { stStore } from '../store/store';

export interface IRating {
  Source?: string;
  Value?: string;
}
export interface IMovieData {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: IRating[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
}

export type InitialType = {
  nameSearched: string;
  isFetchMovies:boolean;
  movies: IMovieData[];
  loading: boolean;
  movieID: string;
  movieDetail: IMovieData;
};

export type TypeOfDefaultState = typeof stStore;

export enum UserActionTypes {
  SEARCH_MOVIE = 'SEARCH_MOVIE',
  IS_FETCH_MOVIES = 'IS_FETCH_MOVIES',
  SET_MOVIES = 'SET_MOVIES',
  SORT_MOVIES = 'SORT_MOVIES',
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIE = 'FETCH_MOVIE',
  LOADING = 'LOADING',
  FETCH_ID = 'FETCH_ID'
}

export type ActionTypes =
  |sortMovies
  | searchMovie
  | isFetchMovies
  | fetchMovies
  | setMovies
  | fetchMovieDetail
  | loading
  | fetchID // Типы действий:1получить набранный фильм,сделать запрос+сетстэйт,

export type searchMovie = {
  type: UserActionTypes.SEARCH_MOVIE;
  payload: string;
};
export type isFetchMovies = {
  type: UserActionTypes.IS_FETCH_MOVIES;
  payload: boolean;
};

export type fetchMovies = {
  type: UserActionTypes.FETCH_MOVIES;
  payload: boolean;
};
export type fetchID = {
  type: UserActionTypes.FETCH_ID;
  payload: string;
};
export type setMovies = {
  type: UserActionTypes.SET_MOVIES;
  payload: Array<IMovieData>;
};

export type fetchMovieDetail = {
  type: UserActionTypes.FETCH_MOVIE;
  payload:IMovieData;
};

export type loading = {
  type: UserActionTypes.LOADING;
  payload: boolean;
};
export type sortMovies = {
  type: UserActionTypes.SORT_MOVIES;
  payload:Array<IMovieData> ;
};
