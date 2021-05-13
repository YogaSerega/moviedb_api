/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { TypeOfDefaultState, IMovieData } from '../redux/types/types';

export const API_KEY = '4435bc0e';
export const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchItem = (
  state:TypeOfDefaultState,
):string => state.stateStore!.nameSearched;
export const isLoading = (
  state:TypeOfDefaultState,
):boolean => state.stateStore!.loading;
export const movies = (
  state:TypeOfDefaultState,
):Array<IMovieData> => state.stateStore!.movies;
export const id = (
  state:TypeOfDefaultState,
):string => state.stateStore!.movieID;
