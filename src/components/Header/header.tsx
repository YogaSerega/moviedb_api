import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Buttons from '../buttons/buttons';

export default function Header(): React.ReactElement {
  return (

    <div className="header">
      <SearchBar />
      <Buttons />
      <h3>MOVIEDB</h3>
    </div>

  );
}
