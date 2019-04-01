import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from "../_reducers/index";

const allStoreEnhancers = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(
    rootReducer,
    allStoreEnhancers
);

export default store;