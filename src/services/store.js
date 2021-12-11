import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootreducers from "./Reducers/index"

const store = createStore(rootreducers, {} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store