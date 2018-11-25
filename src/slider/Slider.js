import React, { Component } from 'react';
import './Slider';
import Slide from './Slide';
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";



class Slider extends Component {
   constructor(props) {
      super(props);

      this.state = {
         images: [
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
         ],
         currentIndex: 0,
         translateValue: 0

      }
   }

   onNext = () => {

      if (this.state.currentIndex === this.state.images.length - 1) {
         return this.setState({
            currentIndex: 0,
            translateValue: 0
         });
      }
      console.log('Next Slide');

      // This will not run if we met the if condition above
      this.setState(prevState => ({
         currentIndex: prevState.currentIndex + 1,
         translateValue: prevState.translateValue + -(this.slideWidth())
      }));
   }

   slideWidth = () => {
      return document.querySelector('.slide').clientWidth
   }

   onPrevious = () => {
      console.log('Previous Slide');
   }

   render() {

      const display = (
      <div className="slider-wrapper" style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
         }}>

         {
            this.state.images.map((image, i) => (
               <Slide key={i} image={image} />
            ))
         }
      </div>)
      return (
         <div className="slider">
            {display}
            
            {/* Arrows */}
            <RightArrow onNext={this.onNext} />
            <LeftArrow onPrevious={this.onPrevious} />

         </div>
      );
   }
}

export default Slider;
