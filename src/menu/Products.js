import React from 'react';
import './Products.css';
import {Link} from 'react-router-dom';
export default function Products() {

  return (
  <div className='body'> 
    <div className='banner'>
      <img src='images/logobackblack.png' />
    </div>
    <div className="image-box">
      <div className='image-box-in'>
        <Link to="/Products/:id" >
        <img className="image-box-img" src='images/pakage.jpeg' />        
        </Link >
        <ul>
        <li>first pakage</li>
        <li>15000원</li>
        </ul>
      </div>
      <div className='image-box-in'>
        <Link to="/Products/:id" >
        <img className="image-box-img" src="images/pakages.jpeg" />
        </Link>
        <ul>
        <li>second pakage</li>
        <li>20000원</li>
        </ul>
      </div>
    </div>
  </div>
  );
}
