import {
  UserActionTypes,
  ActionTypes,
  IMovieData,
  InitialType,
} from '../types/types';

const initialState = {
  nameSearched: '',
  isFetchMovies: false,
  movies: [] as Array<IMovieData>,
  loading: false,
  movieID: '',
  movieDetail: {} as IMovieData,
};

export const reducer = (
  state: InitialType = initialState,
  action: ActionTypes,
): InitialType | undefined => {
  switch (action.type) {
    case UserActionTypes.SEARCH_MOVIE:
      return { ...state, nameSearched: action.payload };
    case UserActionTypes.SET_MOVIES:
      return { ...state, movies: action.payload };
    case UserActionTypes.IS_FETCH_MOVIES:
      return { ...state, isFetchMovies: action.payload };
    case UserActionTypes.SORT_MOVIES:
      return { ...state, movies: action.payload };
    case UserActionTypes.FETCH_ID:
      return { ...state, movieID: action.payload };

    case UserActionTypes.FETCH_MOVIE:
      return { ...state, movieDetail: action.payload };
    default:
      return state;
  }
};
