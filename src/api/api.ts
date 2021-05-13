/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constants';

function handleError(error): void { // TODO в хелперы перенести
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
}

export function* getMovieResult(search: string): Generator {
  const res = yield axios.get(`${BASE_URL}&s=${search}`).catch(handleError);
  return res;
}

export function* getMovieDetail(id: string): Generator {
  const res = yield axios.get(`${BASE_URL}&i=${id}`).catch(handleError);
  return res;
}
export type ApType = ReturnType<typeof getMovieResult>;
