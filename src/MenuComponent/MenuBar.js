import React, { Component } from 'react';
import "./MenuBar.css"
class MenuBar extends Component {
   render() {
      return (
         <nav className="nav-bar">
            <a href="#"><i className="fa fa-fw fa-home"></i> Home</a>
            <a href="#"><i className="fa fa-fw fa-search"></i> Search</a>
            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
         </nav>
      );
   }
}

export default MenuBar;
