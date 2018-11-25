import React, { Component } from 'react';
import "./MenuButton.css";

class MenuButton extends Component {
   render() {
      return (
         <a type="button"onMouseDown={this.props.handleMouseDown} className="icon-button">
            <i className="fa fa-bars"></i>
         </a>
      );
   }
}

export default MenuButton;
