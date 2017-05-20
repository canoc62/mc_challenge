import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='banner-nav-container'>
      <div id='banner'>
        MedCircle
      </div>
      <nav id='nav'>
        <ul>
          <li><Link to='/'>Articles</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;