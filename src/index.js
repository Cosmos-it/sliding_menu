import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuContainer from './MenuContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <MenuContainer />,
   document.getElementById('root')
);

serviceWorker.unregister();
