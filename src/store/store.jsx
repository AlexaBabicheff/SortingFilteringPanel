import { configureStore } from '@reduxjs/toolkit';
import checkboxReducer from './reducers';

const initialState = {
    checkbox1: false,
    checkbox2: true
};

const store = configureStore({
    reducer: checkboxReducer,
    preloadedState: initialState
});

export default store;