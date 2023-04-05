import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import MovieCollection from './pages/MovieCollection';

<Route path="Podcasts" element={<Podcasts />} />;
<Route path="MovieCollection" element={<MovieCollection />} />;

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="movieCollection" element={<MovieCollection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  return <Navigation />;
}

ReactDOM.render(<App />, document.getElementById('root'));
