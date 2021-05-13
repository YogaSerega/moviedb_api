/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unneeded-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { IMovieData } from '../../redux/types/types';
import {
  MovieImage,
  MovieInfo,
  MovieLeftInfo,
  MovieTopInfo,
  Wrapper,
} from './style';

function Detail(): React.ReactElement {
  const defaultState: any = useSelector(
    (state) => state,
  ); // TODO ЗАТИПИЗИРОВАТЬ СТЭЕЙТ
  const movieData = defaultState.stateStore.movieDetail;

  const {
    Poster,
    Title,
    Year,
    Runtime,
    Released,
    Director,
    Actors,
    Plot,
    Awards,
    Ratings = [], // TODO разобраться почему по индексу нелья получить RATING
    BoxOffice,
    Genre,
    Country,
    Rated,
    Writer,
    Language,
  }: IMovieData = movieData;
  return (
    <Wrapper>
      <Row>
        <Col>
          <h1>
            {Title}
            {' '}
            {Year && `(${Year})`}
          </h1>
        </Col>
      </Row>
      <Row>
        <MovieLeftInfo md={3} sm={6} xs="12">
          <MovieTopInfo>
            {Rated}
            {' '}
            | Genre:
            {Genre}
            {' '}
            | Duration:
            {Runtime}
            {' '}
            |
            {Released}

          </MovieTopInfo>
          <MovieImage>
            <img src={Poster} alt="N/A" />
          </MovieImage>
        </MovieLeftInfo>
        <Col md={9} sm={6} xs="12">
          <MovieInfo>
            <p>
              <span>Director:</span>
              {' '}
              {Director}
            </p>
            <p>
              <span>Writer:</span>
              {' '}
              {Writer}
            </p>
            <p>
              <span>Actors:</span>
              {' '}
              {Actors}
            </p>
            <p>
              <span>Plot:</span>
              {' '}
              {Plot}
            </p>
            <p>
              <span>Awards:</span>
              {' '}
              {Awards}
            </p>
            <p>
              <span>Country:</span>
              {' '}
              {Country}
            </p>
            <p>
              <span>Box Office:</span>
              {' '}
              {BoxOffice}
            </p>
            <p>
              <span>Language:</span>
              {' '}
              {Language}
            </p>
          </MovieInfo>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Detail;
