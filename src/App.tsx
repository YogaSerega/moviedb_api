/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import Details from './components/Details/details';
import './App.css';
import Header from './components/Header/header';
import About from './components/About/about';

export default function App(): React.ReactElement {
  return (
    <>

      <Route path="/" render={() => <Header />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/movieList" render={() => <MovieList />} />
      <Route path="/details/:id?" render={() => <Details />} />
    </>
  );
}
