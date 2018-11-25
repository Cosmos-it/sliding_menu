import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuButton from './MenuComponent/MenuButton';
import Menu from './MenuComponent/Menu';
import MenuBar from './MenuComponent/MenuBar';
import Slider from './slider/Slider';

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible:false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    console.log('clicked');
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }


  render() {
    return (
      <div className="App" id="container">
      <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
      <MenuBar />
        <Slider />
      </div>
    );
  }
}

export default MenuContainer;
