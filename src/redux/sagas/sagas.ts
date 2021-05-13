/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  put, call, takeEvery, select,
} from 'redux-saga/effects';

import { getMovieResult, getMovieDetail } from '../../api/api';
import {
  changeIsLoading,
  setFetchedMovies,
  fetchDetailMovie,
} from '../actions/actions';
import { UserActionTypes } from '../types/types';
import {
  searchItem, isLoading, movies, id,
} from '../../constants/constants';

export function* fetchMovieList() { // TODO SAGA TYPE
  yield put(changeIsLoading(true));
  const nameSearch = yield select(searchItem);
  const res = yield call(() => getMovieResult(nameSearch));
  if (res) {
    yield put(setFetchedMovies(res.data.Search));
  }
  yield put(changeIsLoading(false));
}

export function* showLoadingGUIElement() { // TODO SAGA TYPE LOADING SHOW ?????
  const loading = yield select(isLoading);
}
export function* setSortMovies() { // TODO SAGA TYPE
  const moviesFromState = yield select(movies);
  yield put(setFetchedMovies(moviesFromState.sort((a, b) => a.Year - b.Year)));
}
export function* FetchMovieDetaiByID() { // TODO SAGA TYPE
  yield put(changeIsLoading(true));
  const movieID = yield select(id);
  const res = yield call(() => getMovieDetail(movieID));
  yield put(fetchDetailMovie(res.data));
  yield put(changeIsLoading(false));
}
export function* requestMovieWatcher() { // TODO SAGA TYPE
  yield takeEvery(UserActionTypes.FETCH_MOVIES, fetchMovieList);
  yield takeEvery(UserActionTypes.SORT_MOVIES, setSortMovies);
  yield takeEvery(UserActionTypes.LOADING, showLoadingGUIElement);
  yield takeEvery(UserActionTypes.FETCH_ID, FetchMovieDetaiByID);
}
