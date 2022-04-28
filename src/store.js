import { applyMiddleware, createStore } from 'redux'
import combinedReducers from './state/combinedReducers';
import thunk from "redux-thunk";

const store = createStore(combinedReducers,applyMiddleware(thunk));
// console.log(store.getState());

export default store;
