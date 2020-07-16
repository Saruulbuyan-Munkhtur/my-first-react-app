import React from 'react';
import ReactDOM from 'react-dom';
import './cssFiles/index.css';
import * as serviceWorker from './serviceWorker';
import Layout from './containers/Layout';
import 'tachyons'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// jsdrops.com/react-dom2


ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
