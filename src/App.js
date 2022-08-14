import './App.css';
import Nav from './shared_compo/Nav'
import Main from './landing_page/Main';
import Stylesheet from './landing_page/Stylesheet'
import { Route,Routes } from 'react-router-dom';
import Genre1 from './landing_page/Genre1'
import Cart from './landing_page/Cart';
import React, { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState("physics");

  const changeGenre = (s) => {
    setSearch(s);
  }

  const [cart, setCart] = useState([])
  useEffect(() => {
    console.log(cart)
  }, [cart])
  
  return (
    <div className="App">
      <Nav />
      <>
        {/* <Stylesheet /> */}
        <Routes>
          <Route path="/" exact element={<Main changeGenre={changeGenre} />} />
          <Route path="/Genre1" exact element={<Genre1 search={search} cart={cart} setCart={setCart}/>} />
          <Route path="/Cart" exact element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;