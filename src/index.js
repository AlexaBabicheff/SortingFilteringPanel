import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";

import {configureStore} from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import rootReducer from './reducers';
import initialState from './store/initialState';
import checkboxReducer from '../src/reducers/checkboxReducer.jsx';

const store = configureStore({
  reducer: checkboxReducer,
  preloadedState: initialState
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);