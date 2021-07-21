import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//路由包
import {BrowserRouter} from 'react-router-dom'
//首页
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from './store/index'

//适配文件
import 'lib-flexible'

ReactDOM.render(
  // <BrowserRouter>
  //   <React.StrictMode>
  //     <App/>
  //   </React.StrictMode>
  // </BrowserRouter>,
  <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
