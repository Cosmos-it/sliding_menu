import React, { Component } from 'react';
import "./Menu.css";

class Menu extends Component {

  render() {
    let visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu" className={visibility}>
        <h2><a href="/" className="closebtn" onMouseDown={this.props.handleMouseDown}>&times;</a></h2>
        <div className="menu-item">
          <h2><a href="#">Home</a></h2>
          <h2><a href="#">Search</a></h2>
          <h2><a href="#">Contact</a></h2>
          <h2><a href={"https://form.jotform.com/83245082025147"} target="_blank" onMouseDown={this.props.handleMouseDown}>Login</a></h2>
        </div>
      </div>
    );
  }
}

export default Menu;
