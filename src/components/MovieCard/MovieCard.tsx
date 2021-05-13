/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable no-console */
import { useDispatch } from 'react-redux';
import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieID } from '../../redux/actions/actions';
import {
  searchMovie,
  isFetchMovies,
  loading,
  fetchMovies,
  fetchMovieDetail,
  fetchID,
  IMovieData,
} from '../../redux/types/types';

export interface MovieCardComponentProps {
  movie: IMovieData;
}

function MovieCard({ movie }: MovieCardComponentProps): React.ReactElement {
  const dispatch = useDispatch<
      Dispatch<
        | searchMovie
        | isFetchMovies
        | loading
        | fetchMovies
        | fetchMovieDetail
        | fetchID
      >
    >();
  const poster = movie ? movie.Poster : '';
  const title = movie ? movie.Title : 'undefined';
  const year = movie ? movie.Year : 'undefined';
  const id = movie ? movie.imdbID : 'undefined';
  const clickModalOpen = (): void => {
    dispatch(fetchMovieID(id || ''));
    console.log(id);
  };
  return (
    <div className="wrapperCard">
      <div className="card card-body bg-dark text-center h-100">
        <img className="imgPoster" src={poster} alt="Movie Cover" />
        <h5 className="text-light card-title">
          {title}
          {' '}
          {year}
        </h5>
        <Link
          className="button"
          moviecard={movie}
          onClick={clickModalOpen}
          to={{
            pathname: `/details/${movie.imdbID}`,
          }}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
// }

export default MovieCard;
