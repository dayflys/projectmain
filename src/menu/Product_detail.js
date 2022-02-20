import React from "react";
import './Product_detail.css';
import { Link } from "react-router-dom";

function Product_detail(){
return(
    <div className="body">
        <div className='banner'>
            <img src='images/logobackblack.png' />
        </div>
        <div className="image-box">
            <div className='image-box-in'>
                <Link to="/Products/:id" >
                    <img className="image-box-img" src='images/balloon.png' />        
                </Link >
                <ul>
                    <li>first pakage</li>
                    <li>15000원</li>
                </ul>
            </div>
            <div className='image-box-in'>
                <Link to="/Products/:id" >
                    <img className="image-box-img" src="images/candle.png" />
                </Link>
                <ul>
                    <li>second pakage</li>
                    <li>20000원</li>
                </ul>
            </div>
        </div>
        <div className="image-box">
            <div className='image-box-in'>
                <Link to="/Products/:id" >
                    <img className="image-box-img" src="images/fabric.png" />
                </Link>
                <ul>
                    <li>second pakage</li>
                    <li>20000원</li>
                </ul>
            </div>    
            <div className='image-box-in'>
                <Link to="/Products/:id" >
                    <img className="image-box-img" src="images/photocard.png" />
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

export default Product_detail;
