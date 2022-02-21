import './App.css';
import { Link, Route,Routes} from "react-router-dom";
import React from 'react';
import ContactUs from './menu/ContactUs.js';
import Products from './menu/Products.js';
import MainPages from './MainPages';
import ButtonParty from './etc/ButtonParty';
import Navbar from './sidebar/Sidebar.js';
import Product_detail from './menu/Product_detail';
import Login from './etc/Login.js';
import Register from './etc/Register.js';


export default function App() {

  return (
    <div className="App">
      <div className="head"> 
       <Navbar className="sidebar"/>
        <Link to ="/">
          <img id="headimg" src='images/logobackblack.png' />
        </Link>
        <div className="menu">
          <Link to ="/Login">
            <h1 className='loginfont' style={{color:"black"}}>LOGIN</h1>
          </Link>
        </div>
      </div>
      <div className="body-content">
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Product_detail" element={<Product_detail />} />
          <Route path="/Products/:id" element={<sebuProducts />} />
          <Route path="/ButtonParty" element={<ButtonParty />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
      <footer>
        <div className="footer-content">
        <div className="footertext" style={{paddingTop:"6rem"}}>
          © 2022 Test Company.<br /></div>
          <div className="footertext" style={{paddingTop:"2.5rem"}}>
          Contact information Legal information Improve this site Projects Manage your tracker settings<br/></div>
          <div className="footertext" style={{paddingTop:"2.5rem",paddingBottom:"6rem"}}>          
          Test Webpage and Test Company are registered trademarks.<br/>
          All other trademarks are the property of their respective owners.
          </div>
        </div>
      </footer>
    </div>
  );
}
