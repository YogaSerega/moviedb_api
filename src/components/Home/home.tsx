import React from 'react';
import { Link } from 'react-router-dom';

function Home(): React.ReactElement {
  return (
    <div>
      <Link
        id="home"
        className="button"
        type="submit"
        to={{ pathname: '/' }}
      >
        Home
      </Link>
      ,

    </div>

  );
}

export default Home;
