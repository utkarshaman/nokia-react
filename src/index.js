import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore,compose } from "redux";
import thunk from "redux-thunk";
import saveToRedux from "./Store/FormReducer";

const composeEnhancers = compose;

const configureStore=(initialState={})=>{
  return createStore(saveToRedux,initialState,composeEnhancers(applyMiddleware(thunk)));
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
