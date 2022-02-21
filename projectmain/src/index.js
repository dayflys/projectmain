import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './App.css';
import reportWebVitals from './etc/reportWebVitals';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import ContactUs from './menu/ContactUs';
import ButtonParty from './etc/ButtonParty.js';
import Products from './menu/Products.js';
import NotFound from './etc/NotFound';
import Pokemons from './etc/Pokemons.js';
import Test2 from './etc/Test2.js';
import ProductDetail from './etc/ProductDetail.js';
import IT from './etc/IT.js';
import Login from './etc/Login.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Home" element={<Home />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="ButtonParty" element={<ButtonParty />} />
          <Route path="Products" element={<Products />}> 
            <Route path="Pokemons" element={<Pokemons />}/>
            <Route path="Test2" element={<Test2 />} />
            <Route path="IT" element={<IT />} />
            <Route path="Details/:category/:name" element={<ProductDetail />}/>
            <Route path="" element={<Pokemons/>} />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
