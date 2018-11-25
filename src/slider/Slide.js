import React from 'react';
import './Slide';

const Slide = ({image}) => {
      const styles = {
         backgroundImage: `url(${image})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: '50% 60%'
       }
   return <div style={styles} className="slide"></div>
};

export default Slide;

