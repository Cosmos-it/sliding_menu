import React, { Component } from 'react';
import './Arrows.css';

const LeftArrow =(props) => {
   return (
      <div className="backArrow" onClick={props.onPrevious}>
         <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
   )
};

export default LeftArrow;