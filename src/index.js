import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Router, Route, hashHistory } from "react-router";

import App from "./App";
import "./index.css";
import reducer from "./reducers";
import About from "./About";
import Globalprops from "./props/Globalprops";
import Proptypes from "./propstypes/Proptypes";
import GlobalForm from "./forms/GlobalForm";
import registerServiceWorker from "./forms/registerServiceWorker";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/props" component={Globalprops} />
      <Route path="/propstypes" component={Proptypes} />
      <Route path="/form" component={GlobalForm} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker(); // вызываем функцию render у пакета ReactDOM и передаем аргументом компонент (<App /> а вторым

// import { createStore } from 'redux';
//
// function playlist(state = [], action) {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ];
//   }
//   return state;
// }
//
// const store = createStore(playlist);
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
// store.subscribe(() => {
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   });
// })
//
//
// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// });GlobalForm
