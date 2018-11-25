import React, { Component } from 'react';
import './Arrows.css';

const RightArrow =(props) => {
   return (
      <div className="forwardArrow" onClick={props.onNext}>
         <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
   )
};

export default  RightArrow;