import './App.css';
import Nav from './shared_compo/Nav'
import Main from './landing_page/Main';
import Stylesheet from './landing_page/Stylesheet'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Genre1 from './landing_page/Genre1'
import Cart from './landing_page/Cart';
import React, { useState } from 'react';

function App() {
  const [search, setSearch] = useState("physics");

  const changeGenre = (s) => {
    setSearch(s);
  }
  return (
    <div className="App">
      <Nav />
      <Router>
        <Stylesheet />

        <Routes>
          <Route path="/" exact element={<Main changeGenre={changeGenre} />} />
          <Route path="/Genre1" exact element={<Genre1 search={search} />} />
          <Route path="/Cart" exact element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;