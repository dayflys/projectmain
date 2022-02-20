import React, { useState,useEffect } from 'react';
// import './App.css';
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';
import ButtonParty from './ButtonParty.js';
import SquareImageButton from './SquareImageButton.js';
import axios from 'axios';
import SERVER_ADDR from '../SERVER_ADDR.js';

function gotoDetail(name) {
  window.location.replace(`/Products/Details/Pokemons/${name}`);
}

export default function Pokemons() {
  const [data, setData] = useState(null);
  let output = null;
  useEffect(async() => {
    await axios.get('/api/goods/Pokemons')
    .then((res) => {
      setData(res.data);
    })
  },[])
  
  console.log(data);
  if(data != null) {
    output = data.data.map((elem) => {
      return <SquareImageButton key={elem.Name} width="100%" height="100%" value="" imageSource={'images/'+elem.ImageSource} onClick={()=>{gotoDetail(elem.Name)}} />;
    })
    return (<div className="product-content">{output}</div>);
  }

  return (<div>
    <h1>Please wait.</h1>
  </div>);

}