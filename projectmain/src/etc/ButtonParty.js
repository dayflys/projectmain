import React from 'react';
// import './App.css';
import {Outlet, Link} from "react-router-dom";
import Button from './Button.js';
import BlackRoundButton from './BlackRoundButton.js';
import BoldTextButton from './BoldTextButton.js';

function test() {
  console.log("test");
}
function test2() {
  window.location.replace('http://www.google.com');
}
export default function ButtonParty() {
  return (
      <div className="content-container"> 
        <div className="content">
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" color="red" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="red"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="red"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="red"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="red"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="blue"/></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton" /></div>
          <div><BlackRoundButton width="100%" height="100%" value="BRButton+" backgroundColor="red"/></div>
        </div>
      </div>
  );
}
