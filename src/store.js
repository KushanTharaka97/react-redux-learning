import { createStore } from 'redux'
import combinedReducers from './state/combinedReducers';

const store = createStore(combinedReducers);
// console.log(store.getState());

export default store;
