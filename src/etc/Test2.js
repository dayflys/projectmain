import React, { useState,useEffect } from 'react';
import SquareImageButton from './SquareImageButton.js';
import axios from 'axios';

function gotoTest(name) {
  window.location.replace(`/Products/Details/Pokemons/${name}`);
}

export default function Test2() {
  const [data, setData] = useState(null);
  useEffect(async() => {
    await axios.get('/api/goods/Pokemons')
    .then((res) => {
      setData(res.data);
    })
  },[])

  return (<div className="product-content">
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} onClick={()=>{gotoTest("피카츄")}}/>
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/guiddol.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  <SquareImageButton width="100%" height="100%" value="" imageSource={'images/pikachu.png'} /> 
  </div>);
  //return (<>{output}</>);

}