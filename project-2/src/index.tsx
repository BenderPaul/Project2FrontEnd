import React from 'react';
import ReactDOM, { render } from 'react-dom';
//middleware is custom functionality for redux. Lets your wrap the dispatch method dynamically
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
// This is the middleware that will be passed in to allow asynchronus code
import thunk from 'redux-thunk';
import './index.css';
import App, { AppWrapper } from './App';
import reportWebVitals from './reportWebVitals';
// import reducer from './store/UserRegister/reducer'


// const store: Store<UserState, UserAction> & {
//   dispatch: DispatchType
// } = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
