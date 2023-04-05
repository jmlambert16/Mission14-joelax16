import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <ul>
        <li>
          <Link class="navbar-brand" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link class="navbar-brand" to="/podcasts">
            My Podcasts
          </Link>
        </li>
        <li>
          <Link class="navbar-brand" to="/movieCollection">
            Movie Collection
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
